import {
  IsInt,
  IsString,
  IsDate,
  IsNumber,
  IsOptional,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateCarePlanBudgetPaymentHistoricDTO {
  @IsString()
  @MaxLength(255)
  payment_budget_id: string;

  @IsDate()
  payment_due_date: Date;

  @IsInt()
  @Min(1)
  payment_installments_number: number;

  @IsNumber()
  payment_installments_value: number;

  @IsOptional()
  @IsDate()
  payment_installments_value_date_received?: Date;

  @IsString()
  @MaxLength(50)
  payment_status: string;
}
