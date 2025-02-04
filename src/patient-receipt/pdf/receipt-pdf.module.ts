import { Module, forwardRef } from '@nestjs/common';
import { PdfModule } from 'src/pdf/pdf.module';
import { ReceiptPdfService } from './receipt-pdf.service';
import { ReceiptPdfController } from './receipt-pdf.controller';
import { ClinicModule } from '../../clinic/clinic.module';
import { PatientReceiptModule } from '../patient-receipt.module';
import { PatientModule } from '../../patient/patient.module';

@Module({
  imports: [
    forwardRef(() => ClinicModule),

    PdfModule,

    PatientReceiptModule,

    PatientModule,
    // UserModule,
  ],

  providers: [ReceiptPdfService],
  controllers: [ReceiptPdfController],
  exports: [ReceiptPdfService],
})
export class ReceiptPdfModule {}
