import { Module } from '@nestjs/common';
import { PatientCertificateService } from './patient-certificate.service';
import { PatientCertificateController } from './patient-certificate.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PatientCertificateProviders } from './patient-certificate.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PatientCertificateController],
  providers: [...PatientCertificateProviders, PatientCertificateService],
  exports: [PatientCertificateService],
})
export class PatientCertificateModule {}
