import { PartialType } from '@nestjs/mapped-types';
import { ClinicProcedureDto } from './create-clinic-procedure.dto';

export class UpdateClinicProcedureDto extends PartialType(ClinicProcedureDto) {}
