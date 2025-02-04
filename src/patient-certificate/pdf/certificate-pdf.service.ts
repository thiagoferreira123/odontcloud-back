import { Injectable } from '@nestjs/common';
import { PdfService } from 'src/pdf/pdf.service';
import { PatientCertificate } from '../entities/patient-certificate.entity';
import { Patient } from '../../patient/entities/patient.entity';
import { Clinic } from '../../clinic/entities/clinic.entity';

@Injectable()
export class CertificatePdfService {
  constructor(private readonly pdfService: PdfService) {}

  async generatePdf(
    certificate: PatientCertificate,
    patient: Patient,
    clinic: Clinic & {
      clinic_logo_link: string;
    },
  ): Promise<Buffer> {
    const pdfBuffer = await this.pdfService.generatePDF(
      {
        certificate,
        patient,
        clinic,
      },
      'src/patient-certificate/pdf/templates/index.hbs',
      {
        displayHeaderFooter: true,
        headerTemplate: ' ',
        footerTemplate: `
          <span style="width: 100%; font-size: 10px; margin: 0; color: #FFF !important; text-align: center; font-family: 'Montserrat-Medium' !important;">Qualquer uso, cópia, retenção ou divulgação por qualquer pessoa que não seja o destinatário pretendido é
            estritamente proibido. <br><b>${clinic.clinic_full_name} -
              ${clinic.clinic_neighborhood} - ${clinic.clinic_street} - ${clinic.clinic_number} - ${clinic.clinic_phone}</b>
          </span>
      `,
        margin: { bottom: '50px', top: '50px' },
      },
    );

    return pdfBuffer;
  }
}
