import { PartialType } from '@nestjs/mapped-types';
import { CreateFinancialControlDTO } from './create-clinic-control-financial.dto';

export class UpdatePatientDto extends PartialType(CreateFinancialControlDTO) {}
