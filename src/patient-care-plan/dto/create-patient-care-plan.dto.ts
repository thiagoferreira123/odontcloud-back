import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCarePlanDto {
  @IsNotEmpty()
  @IsString()
  care_plan_clinic_id: string;

  @IsNotEmpty()
  @IsString()
  care_plan_patient_id: string;

  @IsNotEmpty()
  @IsString()
  care_plan_date_creation: string;

  @IsNotEmpty()
  @IsString()
  care_plan_identification: string;
}
