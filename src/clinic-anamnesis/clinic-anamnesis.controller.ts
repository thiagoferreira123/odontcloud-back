import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClinicAnamnesiService } from './clinic-anamnesis.service';
import { ClinicAnamnesi } from './entities/clinic-anamnesis.entity';

@Controller('clinic-anamnesis')
export class ClinicAnamnesiController {
  constructor(private readonly clinicAnamnesiService: ClinicAnamnesiService) {}

  @Post()
  create(@Body() patientDetails: ClinicAnamnesi): Promise<ClinicAnamnesi> {
    return this.clinicAnamnesiService.create(patientDetails);
  }

  @Get(':clinic_anamnesi_id')
  findOne(
    @Param('clinic_anamnesi_id') clinic_anamnesi_id: string,
  ): Promise<ClinicAnamnesi> {
    return this.clinicAnamnesiService.findOne(clinic_anamnesi_id);
  }

  @Patch(':clinic_anamnesi_id')
  update(
    @Param('clinic_anamnesi_id') clinic_anamnesi_id: string,
    @Body() patientDetails: Partial<ClinicAnamnesi>,
  ): Promise<ClinicAnamnesi> {
    return this.clinicAnamnesiService.update(
      clinic_anamnesi_id,
      patientDetails,
    );
  }

  @Delete(':clinic_anamnesi_id')
  remove(
    @Param('clinic_anamnesi_id') clinic_anamnesi_id: string,
  ): Promise<void> {
    return this.clinicAnamnesiService.remove(clinic_anamnesi_id);
  }

  @Get('by-clinic/:clinic_anamnesi_clinic_id')
  findAllyClinicId(
    @Param('clinic_anamnesi_clinic_id') clinic_anamnesi_clinic_id: string,
  ): Promise<ClinicAnamnesi[]> {
    return this.clinicAnamnesiService.findAllyClinicId(
      clinic_anamnesi_clinic_id,
    );
  }

  @Get('shared/:clinic_anamnesi_clinic_id')
  findAllShared(
    @Param('clinic_anamnesi_clinic_id') clinic_anamnesi_clinic_id: string,
  ): Promise<ClinicAnamnesi[]> {
    return this.clinicAnamnesiService.findAllShared(clinic_anamnesi_clinic_id);
  }
}
