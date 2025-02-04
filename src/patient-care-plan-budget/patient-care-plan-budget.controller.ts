import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CarePlanBudget } from './entities/patient-care-plan-budget.entity';
import { CarePlanBudgetService } from './patient-care-plan-budget.service';

@Controller('budget')
export class CarePlanBudgetController {
  constructor(private readonly budgetService: CarePlanBudgetService) {}

  @Post()
  create(@Body() budgetDetails: CarePlanBudget): Promise<CarePlanBudget> {
    return this.budgetService.create(budgetDetails);
  }

  @Get(':budget_id')
  findOne(@Param('budget_id') budget_id: string): Promise<CarePlanBudget> {
    return this.budgetService.findOne(budget_id);
  }

  @Patch(':budget_id')
  update(
    @Param('budget_id') budget_id: string,
    @Body() budgetDetails: Partial<CarePlanBudget>,
  ): Promise<CarePlanBudget> {
    return this.budgetService.update(budget_id, budgetDetails);
  }

  @Delete(':budget_id')
  remove(@Param('budget_id') budget_id: string): Promise<void> {
    return this.budgetService.remove(budget_id);
  }

  @Get('by-patient/:budget_care_plan_patient_id')
  findAllByPatient(
    @Param('budget_care_plan_patient_id') budget_care_plan_patient_id: string,
  ): Promise<CarePlanBudget[]> {
    return this.budgetService.findAllByPatient(budget_care_plan_patient_id);
  }
}
