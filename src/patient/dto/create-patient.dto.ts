import {
  IsString,
  IsOptional,
  IsEmail,
  IsInt,
  Min,
  Max,
  IsNotEmpty,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  patient_id: string;

  @IsString()
  @IsNotEmpty()
  patient_clinic_id: string;

  @IsString()
  patient_last_interaction: string;

  @IsString()
  patient_full_name: string;

  @IsOptional()
  @IsString()
  patient_photo?: string;

  @IsString()
  patient_birth_date: string;

  @IsString()
  patient_cpf: string;

  @IsOptional()
  @IsString()
  patient_rg?: string;

  @IsOptional()
  @IsString()
  patient_rg_issuer?: string;

  @IsInt()
  @Min(0)
  @Max(2)
  patient_sex: number;

  @IsString()
  patient_marital_status: string;

  @IsOptional()
  @IsString()
  patient_health_insurance?: string;

  @IsOptional()
  @IsString()
  patient_health_insurance_number?: string;

  @IsOptional()
  @IsString()
  patient_medical_record_number?: string;

  @IsOptional()
  @IsString()
  patient_reference?: string;

  @IsOptional()
  @IsString()
  patient_phone?: string;

  @IsOptional()
  @IsEmail()
  patient_email?: string;

  @IsOptional()
  @IsString()
  patient_extra_contact_full_name?: string;

  @IsOptional()
  @IsString()
  patient_extra_contact_cpf?: string;

  @IsOptional()
  @IsString()
  patient_extra_contact_phone?: string;

  @IsString()
  patient_extra_contact_relationship: string;

  @IsOptional()
  @IsString()
  patient_zip_code?: string;

  @IsOptional()
  @IsString()
  patient_number?: string;

  @IsOptional()
  @IsString()
  patient_street?: string;

  @IsOptional()
  @IsString()
  patient_complement?: string;

  @IsOptional()
  @IsString()
  patient_neighborhood?: string;

  @IsOptional()
  @IsString()
  patient_city?: string;

  @IsOptional()
  @IsString()
  patient_state?: string;

  @IsOptional()
  @IsString()
  patient_register_date?: string;
}
