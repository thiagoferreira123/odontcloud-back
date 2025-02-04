import { Module } from '@nestjs/common';
import { PatientDocumentService } from './patient-document.service';
import { PatientDocumentController } from './patient-document.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PatientDocumentProviders } from './patient-document.provider';
import { S3PatientDocumentService } from './s3-patient-photo-service';

@Module({
  imports: [DatabaseModule],
  controllers: [PatientDocumentController],
  providers: [
    ...PatientDocumentProviders,
    PatientDocumentService,
    S3PatientDocumentService,
  ],
  exports: [PatientDocumentService],
})
export class PatientDocumentModule {}
