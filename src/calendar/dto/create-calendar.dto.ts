import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateCalendarDTO {
  @IsString()
  @IsNotEmpty()
  calendar_id: string;

  @IsString()
  @IsNotEmpty()
  calendar_clinic_id: string;

  @IsString()
  @IsNotEmpty()
  calendar_professional_id: string;

  @IsString()
  @IsOptional()
  calendar_patient_id?: string;

  @IsString()
  @IsNotEmpty()
  calendar_name: string;

  @IsString()
  @IsOptional()
  calendar_phone?: string;

  @IsString()
  @IsOptional()
  calendar_email?: string;

  @IsString()
  @IsOptional()
  calendar_agreement?: string;

  @IsString()
  @IsOptional()
  calendar_date?: string;

  @IsString()
  @IsNotEmpty()
  calendar_start_time: string;

  @IsString()
  @IsNotEmpty()
  calendar_end_time: string;

  @IsString()
  @IsNotEmpty()
  calendar_type: string;

  @IsString()
  @IsOptional()
  calendar_status?: string;

  @IsString()
  @IsOptional()
  calendar_recurrence_type?: string;

  @IsString()
  @IsOptional()
  calendar_recurrence_quantity?: string;

  @IsString()
  @IsOptional()
  calendar_recurrency_type_qnt?: string;

  @IsString()
  @IsOptional()
  calendar_medical_insurance?: string;

  @IsString()
  @IsOptional()
  calendar_observation?: string;
}
