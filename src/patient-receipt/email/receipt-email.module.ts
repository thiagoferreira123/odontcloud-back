import { Module } from '@nestjs/common';
import { PdfModule } from 'src/pdf/pdf.module';
import { ReceiptEmailfController } from './receipt-email.controller';
import { ReceiptEmailService } from './receipt-email.service';
import { PatientReceiptModule } from '../patient-receipt.module';
import { PatientModule } from '../../patient/patient.module';
import { ClinicModule } from '../../clinic/clinic.module';
import { ReceiptPdfModule } from '../pdf/receipt-pdf.module';

@Module({
  imports: [
    PdfModule,
    PatientReceiptModule,
    PatientModule,
    ClinicModule,

    ReceiptPdfModule,
  ],

  providers: [ReceiptEmailService],
  controllers: [ReceiptEmailfController],
})
export class ReceiptEmailModule {}
