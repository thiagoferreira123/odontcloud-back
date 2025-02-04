import { Inject, Injectable, NotFoundException, Res } from '@nestjs/common';
import { Like, Raw, Repository } from 'typeorm';
import { FinancialControl } from './entities/clinic-control-financial.entity';
import * as XLSX from 'xlsx';
import { Response } from 'express';

@Injectable()
export class FinancialControlService {
  constructor(
    @Inject('FinancialControl')
    private financialControlRepository: Repository<FinancialControl>,
  ) {}

  async create(
    financialControlDetails: FinancialControl,
    financial_control_clinic_id: string,
  ): Promise<FinancialControl> {
    return this.financialControlRepository.save({
      ...financialControlDetails,
      financial_control_clinic_id,
    });
  }

  async findOne(financial_control_id: string): Promise<FinancialControl> {
    const financialControl = await this.financialControlRepository.findOne({
      where: { financial_control_id },
    });
    if (!financialControl) {
      throw new NotFoundException(
        `FinancialControl with ID "${financial_control_id}" not found`,
      );
    }
    return financialControl;
  }

  async update(
    financial_control_id: string,
    financialControlDetails: Partial<FinancialControl>,
  ): Promise<FinancialControl> {
    const financialControl = await this.findOne(financial_control_id);
    return this.financialControlRepository.save({
      ...financialControl,
      ...financialControlDetails,
    });
  }

  async remove(financial_control_id: string): Promise<void> {
    const result = await this.financialControlRepository.delete(financial_control_id);
    if (result.affected === 0) {
      throw new NotFoundException(`FinancialControl with ID ${financial_control_id} not found`);
    }
  }
  
  async findAllByClinicId(ClinicId: string): Promise<FinancialControl[]> {
    return this.financialControlRepository.find({
      where: { financial_control_clinic_id: ClinicId },
    });
  }

  async findByClinicIdAndYear(
    financial_control_clinic_id: string,
    year: string,
  ): Promise<FinancialControl[]> {
    return this.financialControlRepository.find({
      where: {
        financial_control_clinic_id,
        financial_control_date: Raw((alias) => `YEAR(${alias}) = :year`, {
          year,
        }),
      },
    });
  }

  findByClinicIdAndPeriod(
    financial_control_clinic_id: string,
    year: string,
    month: string,
  ): Promise<FinancialControl[]> {
    const where = {
      financial_control_clinic_id,
      financial_control_date:
        year && month
          ? Like(`${year}-${month}-%`)
          : year
            ? Like(`${year}-%`)
            : month
              ? Like(`-${month}-%`)
              : undefined,
    };

    return this.financialControlRepository.find({
      where,
      order: { financial_control_date: 'ASC' },
    });
  }

  async downloadSpreadsheetByProfessionalId(
    financial_control_clinic_id: string,
    year: string,
    month: string,
    @Res() res: Response,
  ) {
    // Formata o mês para garantir que está em formato de dois dígitos (ex.: '03' para março)
    const formattedMonth = month.padStart(2, '0');

    // Ajusta a consulta para filtrar pelo ano e mês, além do financial_control_clinic_id
    const transactions = await this.financialControlRepository.find({
      where: {
        financial_control_clinic_id,
        financial_control_date: Raw(
          (alias) => `DATE_FORMAT(${alias}, '%Y-%m') = :date`,
          {
            date: `${year}-${formattedMonth}`,
          },
        ),
      },
    });

    if (!transactions || transactions.length === 0) {
      throw new NotFoundException('Transactions not found');
    }

    const processedData = transactions.map((transaction) => ({
      Data: transaction.financial_control_date,
      Descrição: transaction.financial_control_description,
      Valor: transaction.financial_control_value,
      Tipo: transaction.financial_control_entry_or_exit,
      Categoria: transaction.financial_control_category || '',
      FormaPagamento: transaction.financial_control_payment_method || '',
      // Outros campos conforme necessário
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(processedData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');

    // Usando XLSX.write para gerar a planilha como um buffer
    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

    const fileName = `transacoes-${financial_control_clinic_id}.xlsx`;
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.end(buffer);
  }
}
