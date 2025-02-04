import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateCarePlanBudgetDTO {
  @IsString()
  @IsNotEmpty()
  budget_id: string;

  @IsString()
  @IsOptional()
  budget_care_plan_id?: string;

  @IsString()
  @IsOptional()
  budget_name: string;

  @IsString()
  @IsOptional()
  budget_care_plan_professional_id?: string;

  @IsString()
  @IsOptional()
  budget_care_plan_patient_id?: string;

  @IsString()
  @IsOptional()
  budget_clinic_id?: string;

  @IsString()
  @IsNotEmpty()
  budget_date_creation: string;

  @IsString()
  @IsOptional()
  budget_value?: string;

  @IsString()
  @IsOptional()
  budget_payment_method?: string;

  @IsString()
  @IsOptional()
  budget_discount_type?: string;

  @IsString()
  @IsOptional()
  budget_discount_value?: string;

  @IsString()
  @IsOptional()
  budget_number_installments?: string;

  @IsString()
  @IsOptional()
  budget_due_first_installment?: string;

  @IsString()
  @IsOptional()
  budget_entry_payment?: string;

  @IsString()
  @IsOptional()
  budget_pay_day?: string;

  @IsString()
  @IsOptional()
  budget_observations?: string;
}
