import { Module, forwardRef } from '@nestjs/common';
import { ClinicModule } from '../../clinic/clinic.module';
import { PdfModule } from '../../pdf/pdf.module';
import { CarePlanBudgetModule } from '../patient-care-plan-budget.module';
import { PatientModule } from '../../patient/patient.module';
import { BudgetPdfService } from './budget-pdf.service';
import { BudgetPdfController } from './budget-pdf.controller';
import { ProfessionalModule } from '../../professional/professional.module';

@Module({
  imports: [
    forwardRef(() => ClinicModule),

    PdfModule,

    CarePlanBudgetModule,

    PatientModule,

    ProfessionalModule,
  ],

  providers: [BudgetPdfService],
  controllers: [BudgetPdfController],
  exports: [BudgetPdfService],
})
export class BudgetPdfModule {}
