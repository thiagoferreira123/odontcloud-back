import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { PatientDocumentService } from './patient-document.service';
import { PatientDocument } from './entities/patient-document.entity';
import { FilesInterceptor } from '@nestjs/platform-express';
import { S3PatientDocumentService } from './s3-patient-photo-service';

@Controller('patient-documents')
export class PatientDocumentController {
  constructor(
    private readonly documentsService: PatientDocumentService,
    private readonly s3Service: S3PatientDocumentService,
  ) {}

  @Post()
  create(@Body() patientDetails: PatientDocument): Promise<PatientDocument> {
    return this.documentsService.create(patientDetails);
  }

  @Get(':documents_id')
  findOne(
    @Param('documents_id') documents_id: string,
  ): Promise<PatientDocument> {
    return this.documentsService.findOne(documents_id);
  }

  @Patch(':documents_id')
  update(
    @Param('documents_id') documents_id: string,
    @Body() patientDetails: Partial<PatientDocument>,
  ): Promise<PatientDocument> {
    return this.documentsService.update(documents_id, patientDetails);
  }

  @Delete(':documents_id')
  remove(@Param('documents_id') documents_id: string): Promise<void> {
    return this.documentsService.remove(documents_id);
  }

  @Get('by-patient/:documents_patient_id')
  findAllByPatient(
    @Param('documents_patient_id') documents_patient_id: string,
  ): Promise<PatientDocument[]> {
    return this.documentsService.findAllByPatient(documents_patient_id);
  }

  @Post(':pacienteId/upload')
  @UseInterceptors(
    FilesInterceptor('file', 20, {
      limits: { fileSize: 16 * 1024 * 1024 },
    }),
  )
  async uploadFile(
    @Param('pacienteId') formularioId: string,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<PatientDocument[]> {
    const anexosCriados = [];

    for (const file of files) {
      const awsFileName = await this.s3Service.uploadFile(
        file.buffer,
        file.originalname,
      );

      const anexo = new PatientDocument();
      anexo.documents_patient_id = formularioId; // Certifique-se de que formulárioId seja um número válido
      anexo.documents_folder_name = file.originalname;
      anexo.documents_aws_link = awsFileName;

      const anexoCriado = await this.documentsService.createUpload(anexo);
      anexosCriados.push(anexoCriado);
    }

    return anexosCriados;
  }
}
