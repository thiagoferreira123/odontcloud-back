import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './entities/patient.entity';
import { ClinicDecorator } from '../decorators/clinic.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3PatientPhotoService } from './S3PatientPhotoService';
import { AuthGuard } from '../guards/auth.guard';
import { Response } from 'express';

@Controller('clinic-patient')
export class PatientController {
  constructor(
    private readonly patientService: PatientService,
    private readonly s3PatientPhotoService: S3PatientPhotoService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @Body() patientDetails: Patient,
    @ClinicDecorator('clinic_id') clinic_id: string,
  ): Promise<Patient> {
    return this.patientService.create(patientDetails, clinic_id);
  }

  @UseGuards(AuthGuard)
  @Get('count-by-clinic')
  getPatientsCountByClinic(@ClinicDecorator('clinic_id') clinic_id: string) {
    return this.patientService.getPatientsCountByClinic(clinic_id);
  }

  @UseGuards(AuthGuard)
  @Get('by-clinic')
  findAllyClinicId(
    @ClinicDecorator('clinic_id') patient_clinic_id: string,
  ): Promise<Patient[]> {
    return this.patientService.findAllyClinicId(patient_clinic_id);
  }

  @UseGuards(AuthGuard)
  @Get('download')
  downloadSpreadsheetByPeriod(
    @ClinicDecorator('clinic_id') patient_clinic_id: string,
    @Query('year') year: string,
    @Query('month') month: string,
    @Res() res: Response,
  ) {
    return this.patientService.downloadSpreadsheetByPeriod(
      patient_clinic_id,
      year,
      month,
      res,
    );
  }

  @UseGuards(AuthGuard)
  @Get('gender-statistics-by-month-and-year/:year')
  getGenderStatisticByClinicIdAndYear(
    @ClinicDecorator('clinic_id') patient_clinic_id: string,
    @Param('year') year: string,
  ) {
    return this.patientService.getGenderStatisticByClinicIdAndYear(
      patient_clinic_id,
      year,
    );
  }

  @UseGuards(AuthGuard)
  @Get(':patient_id')
  findOne(@Param('patient_id') patient_id: string): Promise<Patient> {
    return this.patientService.findOne(patient_id);
  }

  @UseGuards(AuthGuard)
  @Put(':patient_id')
  update(
    @Param('patient_id') patient_id: string,
    @Body() patientDetails: Partial<Patient>,
  ): Promise<Patient> {
    return this.patientService.update(patient_id, patientDetails);
  }

  @Delete('upload-photo/:patient_id')
  async deleteLogo(
    @Body() params: { url: string },
    @Param('patient_id') patient_id: string,
  ): Promise<void> {
    Number(patient_id) &&
      (await this.patientService.update(patient_id, {
        patient_photo: '',
      }));
    return await this.s3PatientPhotoService.deleteFile(params.url);
  }

  @UseGuards(AuthGuard)
  @Delete(':patient_id')
  remove(@Param('patient_id') patient_id: string): Promise<void> {
    return this.patientService.remove(patient_id);
  }

  @Post('upload-photo')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return callback(
            new BadRequestException(
              'Apenas arquivos de imagem são permitidos.',
            ),
            false,
          );
        }
        callback(null, true);
      },
    }),
  )
  async uploadSignature(@UploadedFile() file: Express.Multer.File) {
    return this.s3PatientPhotoService.uploadFile(
      file.buffer,
      file.originalname,
    );
  }
}
