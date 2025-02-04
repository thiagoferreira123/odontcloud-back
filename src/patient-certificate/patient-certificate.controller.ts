import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PatientCertificateService } from './patient-certificate.service';
import { PatientCertificate } from './entities/patient-certificate.entity';

@Controller('patient-certificate')
export class PatientCertificateController {
  constructor(
    private readonly patientCertificateService: PatientCertificateService,
  ) {}

  @Post()
  create(
    @Body() patientDetails: PatientCertificate,
  ): Promise<PatientCertificate> {
    return this.patientCertificateService.create(patientDetails);
  }

  @Get(':certificate_id')
  findOne(
    @Param('certificate_id') certificate_id: string,
  ): Promise<PatientCertificate> {
    return this.patientCertificateService.findOne(certificate_id);
  }

  @Patch(':certificate_id')
  update(
    @Param('certificate_id') certificate_id: string,
    @Body() patientDetails: Partial<PatientCertificate>,
  ): Promise<PatientCertificate> {
    return this.patientCertificateService.update(
      certificate_id,
      patientDetails,
    );
  }

  @Delete(':certificate_id')
  remove(@Param('certificate_id') certificate_id: string): Promise<void> {
    return this.patientCertificateService.remove(certificate_id);
  }

  @Get('by-patient/:certificate_patient_id')
  findAllByPatient(
    @Param('certificate_patient_id') certificate_patient_id: string,
  ): Promise<PatientCertificate[]> {
    return this.patientCertificateService.findAllByPatient(
      certificate_patient_id,
    );
  }
}
