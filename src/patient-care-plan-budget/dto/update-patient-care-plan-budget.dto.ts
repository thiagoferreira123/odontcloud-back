import { PartialType } from '@nestjs/mapped-types';
import { CreateCarePlanBudgetDTO } from './create-patient-care-plan-budget.dto';

export class UpdateCarePlanBudgetDto extends PartialType(CreateCarePlanBudgetDTO) {}
