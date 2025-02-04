import { Module } from '@nestjs/common';
import { ClinicAnamnesiService } from './clinic-anamnesis.service';
import { ClinicAnamnesiController } from './clinic-anamnesis.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ClinicAnamnesiProviders } from './clinic-anamnesis.provider';


@Module({
  imports: [DatabaseModule],
  controllers: [ClinicAnamnesiController],
  providers: [... ClinicAnamnesiProviders, ClinicAnamnesiService],
  exports: [ClinicAnamnesiService]
})
export class ClinicAnamnesiModule {}  