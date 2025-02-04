import { PartialType } from '@nestjs/mapped-types';
import { CreateCarePlanDto } from './create-patient-care-plan.dto';

export class UpdateCarePlanDto extends PartialType(CreateCarePlanDto) {}
