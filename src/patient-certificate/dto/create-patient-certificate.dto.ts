import { IsString } from 'class-validator';

export class CreatePatientCertificateDto {
  @IsString()
  certificate_id: string;

  @IsString()
  certificate_patient_id: string;

  @IsString()
  certificate_patient_name: string;

  @IsString()
  certificate_cpf_or_cnpj: string;

  @IsString()
  certificate_permanence_start: string;

  @IsString()
  certificate_permanence_end: string;

  @IsString()
  certificate_date_emission: string;

  @IsString()
  certificate_cep: string;

  @IsString()
  certificate_state: string;

  @IsString()
  certificate_city: string;

  @IsString()
  certificate_neighborhood: string;

  @IsString()
  certificate_street: string;

  @IsString()
  certificate_number: string;
}
