import { Module } from '@nestjs/common';
import { PdfModule } from 'src/pdf/pdf.module';
import { CertificateEmailfController } from './atestado-email.controller';
import { CertificateEmailService } from './atestado-email.service';
import { PatientCertificateModule } from '../patient-certificate.module';
import { PatientModule } from '../../patient/patient.module';
import { ClinicModule } from '../../clinic/clinic.module';
import { CertificatePdfModule } from '../pdf/certificate-pdf.module';

@Module({
  imports: [
    PdfModule,
    PatientCertificateModule,
    PatientModule,
    ClinicModule,

    CertificatePdfModule,
  ],

  providers: [CertificateEmailService],
  controllers: [CertificateEmailfController],
})
export class CertificateEmailModule {}
