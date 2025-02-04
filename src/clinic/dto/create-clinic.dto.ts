import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClinicDto {
  @IsEmail()
  clinic_email: string;

  @IsNotEmpty()
  @IsString()
  clinic_password: string;

  @IsNotEmpty()
  @IsString()
  clinic_full_name: string;

  @IsOptional()
  @IsString()
  clinic_phone: string;

  @IsOptional()
  @IsString()
  clinic_reset_password_token?: string;

  @IsOptional()
  @IsString()
  clinic_reset_password_token_expires?: string;

  @IsOptional()
  @IsString()
  clinic_cnpj_or_cpf?: string;

  @IsOptional()
  @IsString()
  clinic_zipcode?: string;

  @IsOptional()
  @IsString()
  clinic_state?: string;

  @IsOptional()
  @IsString()
  clinic_city?: string;

  @IsOptional()
  @IsString()
  clinic_neighborhood?: string;

  @IsOptional()
  @IsString()
  clinic_street?: string;

  @IsOptional()
  @IsString()
  clinic_number?: string;

  @IsOptional()
  @IsString()
  clinic_logo_link?: string;

  @IsOptional()
  @IsString()
  clinic_signature_link?: string;

  @IsOptional()
  @IsString()
  clinic_stripe_customer_id?: string;
}
