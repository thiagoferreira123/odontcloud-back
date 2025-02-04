import { PartialType } from '@nestjs/mapped-types';
import { CarePlanTooth } from '../entities/patient-care-plan-procedure-tooth.entity';

export class UpdateCarePlanToothDto extends PartialType(CarePlanTooth) {}
