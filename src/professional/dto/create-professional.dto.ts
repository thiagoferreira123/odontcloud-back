import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProfessionalDto {
  @IsNotEmpty()
  @IsString()
  professional_clinic_id: string;

  @IsEmail()
  @MaxLength(255)
  professional_email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  professional_full_name: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  professional_phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  professional_photo_link?: string;

  @IsString()
  @MaxLength(255)
  professional_cro_state: string;

  @IsString()
  @MaxLength(255)
  professional_cro_number: string;

  @IsString()
  @MaxLength(255)
  professional_specialty: string;
}
