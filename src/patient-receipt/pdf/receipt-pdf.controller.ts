import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { ReceiptPdfService } from './receipt-pdf.service';
import { PatientReceiptService } from '../patient-receipt.service';
import { PatientService } from '../../patient/patient.service';
import { ClinicService } from '../../clinic/clinic.service';

@Controller('receipt-pdf')
export class ReceiptPdfController {
  constructor(
    private readonly service: ReceiptPdfService,
    private readonly receiptService: PatientReceiptService,
    private readonly patientService: PatientService,
    private readonly clinicService: ClinicService,
  ) {}

  @Get(':id')
  async generatePdf(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<void> {
    const receipt = await this.receiptService.findOne(id);
    const patient = await this.patientService.getPatientData(
      receipt.receipt_patient_id,
    );
    const clinic = await this.clinicService.getClinicPdfData(
      patient.patient_clinic_id,
    );

    const pdfBuffer = await this.service.generatePdf(receipt, patient, clinic);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=arquivo.pdf',
    });

    res.send(pdfBuffer);
  }
}
