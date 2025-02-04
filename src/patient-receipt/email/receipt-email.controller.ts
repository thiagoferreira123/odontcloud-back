import { Body, Controller, Param, Post } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ReceiptEmailService } from './receipt-email.service';
import { ReceiptPdfService } from '../pdf/receipt-pdf.service';
import { PatientReceiptService } from '../patient-receipt.service';
import { PatientService } from '../../patient/patient.service';
import { ClinicService } from '../../clinic/clinic.service';

@Controller('receipt-email')
export class ReceiptEmailfController {
  constructor(
    private readonly service: ReceiptEmailService,
    private readonly pdfService: ReceiptPdfService,
    private readonly receiptService: PatientReceiptService,
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
    const receipt = await this.receiptService.findOne(id);
    const patient = await this.patientService.getPatientData(
      receipt.receipt_patient_id,
    );
    const clinic = await this.clinicService.getClinicPdfData(
      patient.patient_clinic_id,
    );

    if (!patient.patient_email) {
      throw new Error('Paciente não possui e-mail cadastrado');
    }

    const attachments = [];

    const pdfBuffer = await this.pdfService.generatePdf(
      receipt,
      patient,
      clinic,
    );

    attachments.push({
      filename: 'recibo.pdf',
      content: pdfBuffer,
    });

    const html = this.service.getTemplate(
      { clinic, options },
      'src/patient-receipt/email/templates/index.hbs',
    );

    const from = `${clinic.clinic_full_name} <no-reply@dietsystem.com.br>`;

    await this.mailerService.sendMail({
      to: patient.patient_email,
      from,
      subject: 'Receipt de pagamento de consulta',
      text: 'Receipt',
      html,
      attachments,
    });
  }
}
