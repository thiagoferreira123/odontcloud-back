import { Injectable } from '@nestjs/common';
import { PdfService } from '../../pdf/pdf.service';
import { CarePlanBudget } from '../entities/patient-care-plan-budget.entity';
import { Patient } from '../../patient/entities/patient.entity';
import { Clinic } from '../../clinic/entities/clinic.entity';
import { CarePlanProcedure } from '../../patient-care-plan-procedure/entities/patient-care-plan-procedure..entity';
import {
  parseBrValueToNumber,
  parseToBrValue,
} from '../../helpers/math-helper';
import { Professional } from '../../professional/entities/professional.entity';
import { paymentMethods } from './constants';

interface CarePlanProcedureRow {
  procedure_teeth: number;
  procedure_name: string;
  procedure_price: string;
}

@Injectable()
export class BudgetPdfService {
  constructor(private readonly pdfService: PdfService) {}

  parseCarePlanProcedures(
    procedures: CarePlanProcedure[],
  ): CarePlanProcedureRow[] {
    return procedures.reduce((acc, procedure) => {
      const procedureRows =
        procedure.teeth?.map((tooth) => ({
          procedure_teeth: `${tooth.tooth_number}
          ${
            tooth.tooth_faces &&
            JSON.parse(tooth.tooth_faces)
              .map((f: string) => f[0])
              .join(', ')
          }`,
          procedure_name: procedure.procedure_name,
          procedure_price: parseToBrValue(procedure.procedure_value),
        })) ?? [];

      return [...acc, ...procedureRows];
    }, []);
  }
  // returns a string on '10% (30 R$)' format
  buildCarePlanBudgetDiscountText(
    discountType: string,
    discountValue: string,
    totalValue: string,
  ): string {
    if (discountType === 'percentage') {
      const discountValueNumber = parseBrValueToNumber(discountValue);
      const totalValueNumber = parseBrValueToNumber(totalValue);

      const discountText = `${discountValueNumber}% (${parseToBrValue(
        totalValueNumber * (discountValueNumber / 100),
      )})`;

      return discountText;
    }

    const parcentage =
      (parseBrValueToNumber(discountValue ?? '0') /
        parseBrValueToNumber(totalValue)) *
      100;

    return `${parseToBrValue(discountValue ?? 0)} (${parcentage.toFixed(2)}%)`;
  }

  async generatePdf(
    budget: CarePlanBudget,
    patient: Patient,
    clinic: Clinic,
    professional: Professional,
  ): Promise<Buffer> {
    const pdfBuffer = await this.pdfService.generatePDF(
      {
        budget: {
          ...budget,
          carePlan: {
            ...budget.carePlan,
            procedures: this.parseCarePlanProcedures(
              budget.carePlan.procedures,
            ),
          },
          budget_payment_method:
            paymentMethods.find(
              (method) => method.value === budget.budget_payment_method,
            )?.label ?? budget.budget_payment_method,
          numberOfInstallments: budget.paymentHistorics.filter(
            (installment) => installment.payment_description !== 'Entrada',
          ).length,
          discountContent: this.buildCarePlanBudgetDiscountText(
            budget.budget_discount_type,
            budget.budget_discount_value,
            budget.budget_value,
          ),
          paymentHistorics: budget.paymentHistorics.sort(
            (a, b) =>
              a.payment_installments_number - b.payment_installments_number,
          ),
        },
        patient,
        clinic,
        professional,
      },
      'src/patient-care-plan-budget/pdf/templates/index.hbs',
      {
        displayHeaderFooter: true,
        headerTemplate: ' ',
        footerTemplate: `
      <span style="width: 100%; font-size: 10px; margin: 0; color: #FFF !important; text-align: center; font-family: 'Montserrat-Medium' !important;"><b>${clinic.clinic_full_name} -
        ${clinic.clinic_neighborhood ?? ''} - ${clinic.clinic_street ?? ''} - ${clinic.clinic_number ?? ''} - ${clinic.clinic_phone}</b>
      </span>
    `,
        margin: { bottom: '50px', top: '50px' },
      },
    );

    return pdfBuffer;
  }
}
