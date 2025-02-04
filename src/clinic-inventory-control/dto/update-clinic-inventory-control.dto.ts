import { PartialType } from '@nestjs/mapped-types';
import { ClinicInventoryControl } from '../entities/clinic-inventory-control.entity';

export class UpdateClinicInventoryControlDto extends PartialType(ClinicInventoryControl) {}
