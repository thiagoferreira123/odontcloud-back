import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { CertificatePdfService } from './certificate-pdf.service';
import { PatientCertificateService } from '../patient-certificate.service';
import { PatientService } from '../../patient/patient.service';
import { ClinicService } from '../../clinic/clinic.service';

@Controller('certificate-pdf')
export class CertificatePdfController {
  constructor(
    private readonly service: CertificatePdfService,
    private readonly certificateService: PatientCertificateService,
    private readonly patientService: PatientService,
    private readonly clinicService: ClinicService,
  ) {}

  @Get(':id')
  async generatePdf(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<void> {
    const certificate = await this.certificateService.findOne(id);
    const patient = await this.patientService.getPatientData(
      certificate.certificate_patient_id,
    );
    const clinic = await this.clinicService.getClinicPdfData(
      patient.patient_clinic_id,
    );

    const pdfBuffer = await this.service.generatePdf(
      certificate,
      patient,
      clinic,
    );

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=arquivo.pdf',
    });

    res.send(pdfBuffer);
  }
}
