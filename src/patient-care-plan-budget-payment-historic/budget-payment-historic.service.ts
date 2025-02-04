import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CarePlanBudgetPaymentHistoric } from './entities/budget-payment-historic.entity';
import { parseBrValueToNumber } from '../helpers/math-helper';

@Injectable()
export class CarePlanBudgetPaymentHistoricService {
  constructor(
    @Inject('CarePlanBudgetPaymentHistoric')
    private paymentRepository: Repository<CarePlanBudgetPaymentHistoric>,
  ) {}

  async create(
    paymentDetails: CarePlanBudgetPaymentHistoric,
  ): Promise<CarePlanBudgetPaymentHistoric> {
    return this.paymentRepository.save(paymentDetails);
  }

  async findOne(payment_id: string): Promise<CarePlanBudgetPaymentHistoric> {
    const payment = await this.paymentRepository.findOne({
      where: { payment_id },
    });
    if (!payment) {
      throw new NotFoundException(
        `CarePlanBudgetPaymentHistoric with ID "${payment_id}" not found`,
      );
    }
    return payment;
  }

  async update(
    payment_id: string,
    paymentDetails: Partial<CarePlanBudgetPaymentHistoric>,
  ): Promise<CarePlanBudgetPaymentHistoric> {
    const payment = await this.findOne(payment_id);
    return this.paymentRepository.save({ ...payment, ...paymentDetails });
  }

  async remove(payment_id: string): Promise<void> {
    const result = await this.paymentRepository.delete(payment_id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `CarePlanBudgetPaymentHistoric with ID ${payment_id} not found`,
      );
    }
  }

  async removeByPaymentBudgetId(payment_budget_id: string): Promise<void> {
    await this.paymentRepository.delete({ payment_budget_id });
  }

  // Método para criar histórico de pagamentos parcelados
  async createPaymentHistory(
    paymentBudgetId: string,
    totalAmount: number,
    installments: number,
    budgetEntranceValue: string,
    firstPaymentDate: Date,
    entranceDate: Date,
  ) {
    this.removeByPaymentBudgetId(paymentBudgetId);

    let entrancePayment = null;

    const totalAmountValue =
      budgetEntranceValue?.length > 0
        ? totalAmount - parseBrValueToNumber(budgetEntranceValue)
        : totalAmount;

    if (budgetEntranceValue?.length > 0) {
      entrancePayment = this.paymentRepository.create({
        payment_budget_id: paymentBudgetId,
        payment_due_date: entranceDate.toISOString().split('T')[0],
        payment_installments_value_date_received: entranceDate
          .toISOString()
          .split('T')[0],
        payment_installments_number: 0,
        payment_installments_value: parseBrValueToNumber(budgetEntranceValue),
        payment_status: 'received',
        payment_description: 'Entrada',
      });
    }

    const installmentValue = totalAmountValue / installments;
    const paymentDates = Array.from(
      { length: installments },
      (_, i) =>
        new Date(
          firstPaymentDate.getFullYear(),
          firstPaymentDate.getMonth() + i,
          firstPaymentDate.getDate(),
        ),
    );

    const paymentRecords = paymentDates.map((date, index) => {
      // Calcula a descrição da parcela como "1/10", "2/10", etc.
      const paymentDescription = `${index + 1}/${installments}`;

      return this.paymentRepository.create({
        payment_budget_id: paymentBudgetId,
        payment_due_date: date.toISOString().split('T')[0],
        payment_installments_number: index + 1,
        payment_installments_value: Number(installmentValue.toFixed(2)),
        payment_status: 'pending', // Assuming the initial status is 'pending'
        payment_description: paymentDescription, // Save the calculated description
      });
    });

    return await this.paymentRepository.save(
      entrancePayment ? [entrancePayment, ...paymentRecords] : paymentRecords,
    );
  }
}
