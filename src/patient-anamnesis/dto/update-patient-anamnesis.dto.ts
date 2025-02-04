import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientAnamnesisDTO } from './create-patient-anamnesis.dto';

export class UpdatePatientAnamnesisDto extends PartialType(CreatePatientAnamnesisDTO) {}
