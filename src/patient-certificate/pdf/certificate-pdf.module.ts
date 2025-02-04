import { Module, forwardRef } from '@nestjs/common';
import { PdfModule } from 'src/pdf/pdf.module';
import { CertificatePdfController } from './certificate-pdf.controller';
import { CertificatePdfService } from './certificate-pdf.service';
import { ClinicModule } from '../../clinic/clinic.module';
import { PatientCertificateModule } from '../patient-certificate.module';
import { PatientModule } from '../../patient/patient.module';

@Module({
  imports: [
    forwardRef(() => ClinicModule),

    PdfModule,

    PatientCertificateModule,

    PatientModule,
    // UserModule,
  ],

  providers: [CertificatePdfService],
  controllers: [CertificatePdfController],
  exports: [CertificatePdfService],
})
export class CertificatePdfModule {}
