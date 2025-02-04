import { IsString, Length } from 'class-validator';

export class CreateProsthesisDto {
  @IsString()
  @Length(0, 255)
  prosthesis_patient_id: string;

  @IsString()
  @Length(0, 255)
  prosthesis_professional_id: string;

  @IsString()
  @Length(0, 255)
  prosthesis_clinic_id: string;

  @IsString()
  @Length(0, 255)
  prosthesis_procedure: string;

  @IsString()
  @Length(0, 255)
  prosthesis_forcenedor: string;

  @IsString()
  @Length(0, 255)
  prosthesis_request_date: string;

  @IsString()
  @Length(0, 255)
  prosthesis_delivery_forecast: string;

  @IsString()
  @Length(0, 255)
  prosthesis_delivery_date: string;

  @IsString()
  @Length(0, 255)
  prosthesis_value: string;

  @IsString()
  @Length(0, 255)
  prosthesis_quantity: string;

  @IsString()
  @Length(0, 255)
  prosthesis_cor: string;

  @IsString()
  @Length(0, 255)
  prosthesis_teeth: string;
}
