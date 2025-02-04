import { Module } from '@nestjs/common';
import { CarePlanToothService } from './patient-care-plan-procedure-tooth.service';
import { CarePlanToothController } from './patient-care-plan-procedure-tooth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CarePlanToothProviders } from './patient-care-plan-procedure-tooth.provider';


@Module({
  imports: [DatabaseModule],
  controllers: [CarePlanToothController],
  providers: [... CarePlanToothProviders, CarePlanToothService],
  exports: [CarePlanToothService]
})
export class CarePlanProcedureToothModule {}  