import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class CreateCalendarAlertDTO {
  @IsString()
  @IsNotEmpty()
  alert_clinic_name: string;

  @IsString()
  @IsNotEmpty()
  alert_clinic_id: string;

  @IsString()
  @IsNotEmpty()
  alert_name: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  alert_phone?: string;

  @IsEmail()
  @IsOptional()
  alert_email?: string;

  @IsString()
  @IsNotEmpty()
  alert_date: string;

  @IsString()
  @IsNotEmpty()
  alert_start_time: string;

  @IsString()
  @IsNotEmpty()
  alert_end_time: string;

  @IsString()
  @IsNotEmpty()
  alert_calendar_id: string;

  @IsInt()
  @Min(0)
  @Max(1)
  @IsNotEmpty()
  alert_send_wpp: number;

  @IsInt()
  @Min(0)
  @Max(1)
  @IsNotEmpty()
  alert_send_email: number;
}
