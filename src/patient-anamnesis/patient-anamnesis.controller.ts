import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PatientAnamnesiservice } from './patient-anamnesis.service';
import { PatientAnamnesis } from './entities/patient-anamnesis.entity';

@Controller('patient-anamnesis')
export class PatientAnamnesisController {
  constructor(private readonly anamnesisService: PatientAnamnesiservice) {}

  @Post()
  create(@Body() patientDetails: PatientAnamnesis): Promise<PatientAnamnesis> {
    return this.anamnesisService.create(patientDetails);
  }

  @Get(':anamnesis_id')
  findOne(
    @Param('anamnesis_id') anamnesis_id: string,
  ): Promise<PatientAnamnesis> {
    return this.anamnesisService.findOne(anamnesis_id);
  }

  @Patch(':anamnesis_id')
  update(
    @Param('anamnesis_id') anamnesis_id: string,
    @Body() patientDetails: Partial<PatientAnamnesis>,
  ): Promise<PatientAnamnesis> {
    return this.anamnesisService.update(anamnesis_id, patientDetails);
  }

  @Delete(':anamnesis_id')
  remove(@Param('anamnesis_id') anamnesis_id: string): Promise<void> {
    return this.anamnesisService.remove(anamnesis_id);
  }

  @Get('by-patient/:anamnesis_patient_id')
  findAllByPatient(
    @Param('anamnesis_patient_id') anamnesis_patient_id: string,
  ): Promise<PatientAnamnesis[]> {
    return this.anamnesisService.findAllByPatient(anamnesis_patient_id);
  }
}
