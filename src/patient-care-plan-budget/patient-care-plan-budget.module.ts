import { Module } from '@nestjs/common';
import { CarePlanBudgetService } from './patient-care-plan-budget.service';
import { CarePlanBudgetProviders } from './patient-care-plan-budget.provider';
import { DatabaseModule } from 'src/database/database.module';
import { CarePlanBudgetController } from './patient-care-plan-budget.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CarePlanBudgetController],
  providers: [...CarePlanBudgetProviders, CarePlanBudgetService],
  exports: [CarePlanBudgetService],
})
export class CarePlanBudgetModule {}
