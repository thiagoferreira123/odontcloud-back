import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicAnamnesiDTO } from './create-clinic-anamnesis.dto';

export class UpdateClinicProcedureDto extends PartialType(CreateClinicAnamnesiDTO) {}
