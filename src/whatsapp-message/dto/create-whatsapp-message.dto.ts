import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateWhatsappMessageDto {
  @IsOptional()
  @IsString()
  @MaxLength(500)
  whatsapp_message_happy_birthday: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  whatsapp_message_appointment_scheduling: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  whatsapp_message_appointment_cancellation: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  whatsapp_message_appointment_confirmation: string;
}
