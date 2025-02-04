import { Module } from '@nestjs/common';
import { PatientAnamnesiservice } from './patient-anamnesis.service';
import { PatientAnamnesisController } from './patient-anamnesis.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PatientAnamnesisProviders } from './patient-anamnesis.provider';


@Module({
  imports: [DatabaseModule],
  controllers: [PatientAnamnesisController],
  providers: [... PatientAnamnesisProviders, PatientAnamnesiservice],
  exports: [PatientAnamnesiservice]
})
export class PatientAnamnesisModule {}  