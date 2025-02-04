import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ClinicModule } from './clinic/clinic.module';
import { PatientModule } from './patient/patient.module';
import { ProfessionalModule } from './professional/professional.module';
import { CarePlanModule } from './patient-care-plan/patient-care-plan.module';
import { CarePlanBudgetModule } from './patient-care-plan-budget/patient-care-plan-budget.module';
import { CarePlanBudgetPaymentHistoricModule } from './patient-care-plan-budget-payment-historic/budget-payment-historic.module';
import { CalendarModule } from './calendar/calendar.module';
import { CalendarAlertModule } from './calendar-alert/calendar-alert.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CarePlanProcedureToothModule } from './patient-care-plan-procedure-tooth/patient-care-plan-procedure-tooth.module';
import { CarePlanProcedureModule } from './patient-care-plan-procedure/patient-care-plan-procedure..module';
import { CardMachineModule } from './clinic-card-machine/clinic-card-machine.module';
import { PatientAnamnesisModule } from './patient-anamnesis/patient-anamnesis.module';
import { ClinicProcedureModule } from './clinic-procedure/clinic-procedure.module';
import { ClinicAnamnesiModule } from './clinic-anamnesis/clinic-anamnesis.module';
import { PatientDocumentModule } from './patient-document/patient-document.module';
import { PatientCertificateModule } from './patient-certificate/patient-certificate.module';
import { PatientReceiptModule } from './patient-receipt/patient-receipt.module';
import { ClinicProsthesisModule } from './clinic-prosthesis/clinic-prosthesis.module';
import { ClinicProsthesisSupplierModule } from './clinic-prosthesis-supplier/clinic-prosthesis-supplier.module';
import { CertificatePdfModule } from './patient-certificate/pdf/certificate-pdf.module';
import { CertificateEmailModule } from './patient-certificate/email/atestado-email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ReceiptPdfModule } from './patient-receipt/pdf/receipt-pdf.module';
import { ReceiptEmailModule } from './patient-receipt/email/receipt-email.module';
import { ClinicFinancialControlModule } from './clinic-control-financial/clinic-control-financial.module';
import { CalendarConfigModule } from './calendar-config/calendar-config.module';
import { CalendarWaitingListModule } from './calendar-waiting-list/calendar-waiting-list.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { BudgetPdfModule } from './patient-care-plan-budget/pdf/budget-pdf.module';
import { ClinicInventoryControlModule } from './clinic-inventory-control/clinic-inventory-control.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    MailerModule.forRoot({
      transport: {
        host: 'email-smtp.sa-east-1.amazonaws.com',
        port: 587,
        auth: {
          user: 'AKIARVCGL4JYQS4JP7N7',
          pass: 'BNcxg686iywrBaquc/KRrU+AZfbPASntoitZkAZM9rVw',
        },
      },
    }),
    ScheduleModule.forRoot(),
    ClinicModule,
    ClinicProcedureModule,
    ClinicAnamnesiModule,
    ClinicProsthesisModule,
    ClinicProsthesisSupplierModule,
    ClinicFinancialControlModule,
    ClinicInventoryControlModule,
    ProfessionalModule,
    PatientModule,
    PatientAnamnesisModule,
    PatientDocumentModule,
    PatientCertificateModule,
    CertificateEmailModule,
    CertificatePdfModule,
    PatientReceiptModule,
    ReceiptPdfModule,
    ReceiptEmailModule,
    CarePlanModule,
    CarePlanProcedureToothModule,
    CarePlanProcedureModule,
    CarePlanBudgetModule,
    BudgetPdfModule,
    CarePlanBudgetPaymentHistoricModule,
    CalendarModule,
    CalendarAlertModule,
    CalendarConfigModule,
    CalendarWaitingListModule,
    CardMachineModule,
    DatabaseModule,
    SubscriptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
