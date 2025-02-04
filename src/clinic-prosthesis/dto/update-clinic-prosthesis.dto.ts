import { PartialType } from '@nestjs/mapped-types';
import { CreateProsthesisDto } from './create-clinic-prosthesis.dto';

export class UpdatePatientDto extends PartialType(CreateProsthesisDto) {}
