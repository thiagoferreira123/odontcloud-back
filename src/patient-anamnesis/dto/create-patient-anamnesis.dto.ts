import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePatientAnamnesisDTO {
  @IsNotEmpty()
  @IsString()
  anamnesis_id: string;

  @IsOptional()
  @IsString()
  anamnesis_date_creation: string;

  @IsOptional()
  @IsString()
  anamnesis_status: string;

  @IsNotEmpty()
  @IsString()
  anamnesis_text: string;

  @IsNotEmpty()
  @IsString()
  anamnesis_identification: string;

  @IsNotEmpty()
  @IsString()
  anamnesis_patient_id: string;
}
