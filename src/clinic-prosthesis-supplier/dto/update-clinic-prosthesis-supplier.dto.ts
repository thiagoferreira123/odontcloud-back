import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicProsthesisSupplierDto } from './create-clinic-prosthesis-supplier.dto';

export class UpdateClinicProsthesisSupplierDto extends PartialType(CreateClinicProsthesisSupplierDto) {}
