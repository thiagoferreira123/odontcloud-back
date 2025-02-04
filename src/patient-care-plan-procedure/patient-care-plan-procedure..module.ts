import { Module } from '@nestjs/common';
import { CarePlanProcedureService } from './patient-care-plan-procedure..service';
import { DatabaseModule } from 'src/database/database.module';
import { CarePlanProcedureProviders } from './patient-care-plan-procedure..provider';
import { CarePlanProcedureController } from './patient-care-plan-procedure.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CarePlanProcedureController],
  providers: [...CarePlanProcedureProviders, CarePlanProcedureService],
  exports: [CarePlanProcedureService],
})
export class CarePlanProcedureModule {}
