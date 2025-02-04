import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientCertificateDto } from './create-patient-certificate.dto';

export class UpdatePatientDto extends PartialType(CreatePatientCertificateDto) {}
