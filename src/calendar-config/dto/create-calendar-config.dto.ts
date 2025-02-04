import { IsNotEmpty, IsString, IsOptional, Length } from 'class-validator';

export class CreateCalendarConfigDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  calendar_config_id: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  calendar_config_clinic_id: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  calendar_config_time_start: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  calendar_config_time_end: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  calendar_config_interval_start: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  calendar_config_interval_end: string;

  @IsOptional()
  @IsString()
  @Length(0, 255) // Allow empty string if optional
  calendar_config_service_days: string;
}
