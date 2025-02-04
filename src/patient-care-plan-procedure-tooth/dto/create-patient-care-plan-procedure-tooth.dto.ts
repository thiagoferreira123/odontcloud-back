import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCarePlanToothDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  tooth_number: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  tooth_quadrant: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  tooth_faces: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  tooth_care_plan_id: string;
}
