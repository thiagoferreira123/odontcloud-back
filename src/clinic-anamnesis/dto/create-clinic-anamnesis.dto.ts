import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClinicAnamnesiDTO {

  @IsOptional()
  @IsNotEmpty()
  clinic_anamnesi_clinic_id?: string;

  @IsNotEmpty()
  @IsString()
  clinic_anamnesi_text: string;
}
