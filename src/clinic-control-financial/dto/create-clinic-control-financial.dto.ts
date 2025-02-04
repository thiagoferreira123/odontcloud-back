// create-financial-control.dto.ts
import { IsNotEmpty, IsString, MaxLength, IsOptional } from 'class-validator';

export class CreateFinancialControlDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  financial_control_description: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  financial_control_clinic_id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  financial_control_value: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  financial_control_entry_or_exit: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  financial_control_date: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  financial_control_category: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  financial_control_payment_method: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  financial_control_observation?: string;
}
