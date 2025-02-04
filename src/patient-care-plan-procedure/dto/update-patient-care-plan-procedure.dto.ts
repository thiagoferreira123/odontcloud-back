import { PartialType } from '@nestjs/mapped-types';
import { CreateCarePlanProcedureDTO } from './create-patient-care-plan-procedure.dto';

export class UpdateCarePlanProcedureDto extends PartialType(CreateCarePlanProcedureDTO) {}
