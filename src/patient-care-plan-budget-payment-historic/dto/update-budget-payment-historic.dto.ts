import { PartialType } from '@nestjs/mapped-types';
import { CreateCarePlanBudgetPaymentHistoricDTO } from './create-budget-payment-historic.dto';

export class UpdateCarePlanBudgetPaymentHistoricDto extends PartialType(CreateCarePlanBudgetPaymentHistoricDTO) {}
