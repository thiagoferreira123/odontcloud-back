import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDocumentDTO } from './create-patient-document.dto';

export class UpdatePatientDto extends PartialType(CreatePatientDocumentDTO) {}
