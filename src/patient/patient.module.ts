import { Module, forwardRef } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PatientProviders } from './patient.provider';
import { ClinicModule } from '../clinic/clinic.module';
import { S3PatientPhotoService } from './S3PatientPhotoService';

@Module({
  imports: [forwardRef(() => ClinicModule), DatabaseModule],
  controllers: [PatientController],
  providers: [...PatientProviders, PatientService, S3PatientPhotoService],
  exports: [PatientService],
})
export class PatientModule {}
