import { IsString } from 'class-validator';

export class CreatePatientReceiptDto {
  @IsString()
  receipt_id: string;

  @IsString()
  receipt_patient_id: string;

  @IsString()
  receipt_patient_name: string;

  @IsString()
  receipt_cpf_or_cnpj: string;

  @IsString()
  receipt_receipt_value: string;

  @IsString()
  receipt_value_in_extension: string;

  @IsString()
  receipt_referent_a: string;

  @IsString()
  receipt_issuer: string;

  @IsString()
  receipt_date_emission: string;

  @IsString()
  receipt_cep: string;

  @IsString()
  receipt_state: string;

  @IsString()
  receipt_city: string;

  @IsString()
  receipt_neighborhood: string;

  @IsString()
  receipt_street: string;

  @IsString()
  receipt_number: string;
}
