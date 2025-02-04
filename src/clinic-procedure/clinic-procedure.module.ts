import { Module, forwardRef } from '@nestjs/common';
import { ClinicProcedureService } from './clinic-procedure.service';
import { ClinicProcedureController } from './clinic-procedure.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ClinicProcedureProviders } from './clinic-procedure.provider';
import { ClinicModule } from '../clinic/clinic.module';

@Module({
  imports: [forwardRef(() => ClinicModule), DatabaseModule],
  controllers: [ClinicProcedureController],
  providers: [...ClinicProcedureProviders, ClinicProcedureService],
  exports: [ClinicProcedureService],
})
export class ClinicProcedureModule {}
