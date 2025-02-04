import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateClinicProsthesisSupplierDto {
  @IsNotEmpty()
  @IsString()
  clinic_prosthesis_supplier_clinic_id: string;

  @IsNotEmpty()
  @IsString()
  clinic_prosthesis_supplier_name_fantasy: string;

  @IsNotEmpty()
  @IsString()
  clinic_prosthesis_supplier_cpf_ou_cnpj: string;

  @IsNotEmpty()
  @IsString()
  clinic_prosthesis_supplier_phone: string;

  @IsNotEmpty()
  @IsString()
  clinic_prosthesis_supplier_address: string;

  @IsNotEmpty()
  @IsString()
  clinic_prosthesis_supplier_personal_contact: string;

  @IsOptional()
  @IsString()
  clinic_prosthesis_supplier_observation: string;
}
