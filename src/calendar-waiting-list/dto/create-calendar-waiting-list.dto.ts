import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCalendarWaitingListDto {
    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    calendar_waiting_list_patient_name: string;
    
    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    calendar_waiting_list_clinic_id: string;

    @IsNotEmpty()
    @IsEmail()
    @Length(1, 255)
    calendar_waiting_list_email: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    calendar_waiting_list_contact: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    calendar_waiting_list_health_insurance: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    calendar_waiting_list_appointment_type: string;

    @IsString()
    @Length(0, 255)  // Optional field can be empty
    calendar_waiting_list_observation: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    calendar_waiting_list_scheduling_date: string;
}
