// clinic-procedure.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class ClinicProcedureDto {
  @IsString()
  @IsNotEmpty()
  clinic_procedure_id: string;

  @IsString()
  @IsNotEmpty()
  clinic_procedure_description: string;

  @IsString()
  @IsNotEmpty()
  clinic_procedure_clinic_id: string;

  @IsString()
  @IsNotEmpty()
  clinic_procedure_value: string;
}
