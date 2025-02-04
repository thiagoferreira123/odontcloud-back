import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientReceiptDto } from './create-patient-receipt.dto';

export class UpdatePatientDto extends PartialType(CreatePatientReceiptDto) {}
