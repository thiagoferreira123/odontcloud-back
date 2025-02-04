import { Module } from '@nestjs/common';
import { CarePlanService } from './patient-care-plan.service';
import { CarePlanController } from './patient-care-plan.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CarePlanProviders } from './patient-care-plan.provider';


@Module({
  imports: [DatabaseModule],
  controllers: [CarePlanController],
  providers: [... CarePlanProviders, CarePlanService],
  exports: [CarePlanService]
})
export class CarePlanModule {}  