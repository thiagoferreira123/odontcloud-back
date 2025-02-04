import { Body, Controller, Param, Post } from '@nestjs/common';
import { CertificateEmailService } from './atestado-email.service';
import { CertificatePdfService } from '../pdf/certificate-pdf.service';
import { PatientCertificateService } from '../patient-certificate.service';
import { PatientService } from '../../patient/patient.service';
import { ClinicService } from '../../clinic/clinic.service';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('certificate-email')
export class CertificateEmailfController {
  constructor(
    private readonly service: CertificateEmailService,
    private readonly pdfService: CertificatePdfService,
    private readonly certificateService: PatientCertificateService,
    private readonly patientService: PatientService,
    private readonly mailerService: MailerService,
    private readonly clinicService: ClinicService,
  ) {}

  @Post(':id')
  async sendPdfToPatient(
    @Param('id') id: string,
    @Body()
    options: { textObservation: string },
  ): Promise<void> {
    const certificate = await this.certificateService.findOne(id);
    const patient = await this.patientService.getPatientData(
      certificate.certificate_patient_id,
    );
    const clinic = await this.clinicService.getClinicPdfData(
      patient.patient_clinic_id,
    );

    if (!patient.patient_email) {
      throw new Error('Paciente não possui e-mail cadastrado');
    }

    const attachments = [];

    const pdfBuffer = await this.pdfService.generatePdf(
      certificate,
      patient,
      clinic,
    );

    attachments.push({
      filename: 'atestado.pdf',
      content: pdfBuffer,
    });

    const html = this.service.getTemplate(
      { clinic, options },
      'src/patient-certificate/email/templates/index.hbs',
    );

    const from = `${clinic.clinic_full_name} <no-reply@dietsystem.com.br>`;

    await this.mailerService.sendMail({
      to: patient.patient_email,
      from,
      subject: 'Certificate de consulta',
      text: 'Certificate',
      html,
      attachments,
    });
  }
}
