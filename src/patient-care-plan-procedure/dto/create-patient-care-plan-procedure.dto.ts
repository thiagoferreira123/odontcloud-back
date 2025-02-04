import { IsString, IsOptional, IsUUID, IsNotEmpty } from 'class-validator';

export class CreateCarePlanProcedureDTO {
  @IsUUID()
  procedure_id: string;

  @IsString()
  @IsNotEmpty()
  procedure_name?: string;

  @IsString()
  @IsNotEmpty()
  procedure_care_plan_id?: string;

  @IsString()
  @IsNotEmpty()
  procedure_professional_id?: string;

  @IsString()
  @IsOptional()
  procedure_value?: string;

  @IsString()
  @IsOptional()
  procedure_deciduous_or_permanent?: string;

  @IsString()
  @IsOptional()
  procedure_observations?: string;
  
  @IsString()
  @IsNotEmpty()
  procedure_status: string;
}
