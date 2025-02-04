import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { BudgetPdfService } from './budget-pdf.service';
import { CarePlanBudgetService } from '../patient-care-plan-budget.service';
import { PatientService } from '../../patient/patient.service';
import { ClinicService } from '../../clinic/clinic.service';
import { ProfessionalService } from '../../professional/professional.service';

@Controller('budget-pdf')
export class BudgetPdfController {
  constructor(
    private readonly service: BudgetPdfService,
    private readonly budgetService: CarePlanBudgetService,
    private readonly patientService: PatientService,
    private readonly clinic: ClinicService,
    private readonly professionalService: ProfessionalService,
  ) {}

  @Get(':id')
  async generatePdf(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<void> {
    const budget = await this.budgetService.findOneWithCarePlan(id);
    const patient = await this.patientService.getPatientData(
      budget.budget_care_plan_patient_id,
    );
    const cnilic = await this.clinic.getClinicPdfData(
      patient.patient_clinic_id,
    );
    const professional = await this.professionalService.findOne(
      budget.budget_care_plan_professional_id,
      true,
    );

    const pdfBuffer = await this.service.generatePdf(
      budget,
      patient,
      cnilic,
      professional,
    );

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=arquivo.pdf',
    });

    res.send(pdfBuffer);
  }
}
