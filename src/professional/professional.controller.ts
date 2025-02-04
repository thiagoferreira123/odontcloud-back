import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { Professional } from './entities/professional.entity';
import { S3ProfessionalPhotoService } from './S3ProfessionalPhotoService';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '../guards/auth.guard';
import { ClinicDecorator } from '../decorators/clinic.decorator';

@Controller('professional')
export class ProfessionalController {
  constructor(
    private readonly professionalService: ProfessionalService,
    private readonly s3ProfessionalPhotoService: S3ProfessionalPhotoService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @Body() professionalDetails: Professional,
    @ClinicDecorator('clinic_id') professional_clinic_id: string,
  ): Promise<Professional> {
    return this.professionalService.create(
      professionalDetails,
      professional_clinic_id,
    );
  }

  @Get(':professional_id')
  findOne(
    @Param('professional_id') professional_id: string,
  ): Promise<Professional> {
    return this.professionalService.findOne(professional_id);
  }

  @Patch(':professional_id')
  update(
    @Param('professional_id') professional_id: string,
    @Body() professionalDetails: Partial<Professional>,
  ): Promise<Professional> {
    return this.professionalService.update(
      professional_id,
      professionalDetails,
    );
  }

  @Delete('upload-photo/:professional_id')
  async deleteLogo(
    @Body() params: { url: string },
    @Param('professional_id') professional_id: string,
  ): Promise<void> {
    Number(professional_id) &&
      (await this.professionalService.update(professional_id, {
        professional_photo_link: '',
      }));
    return await this.s3ProfessionalPhotoService.deleteFile(params.url);
  }

  @Delete(':professional_id')
  remove(@Param('professional_id') professional_id: string): Promise<void> {
    return this.professionalService.remove(professional_id);
  }

  @Get('by-clinic/:professional_clinic_id')
  findAllyClinicId(
    @Param('professional_clinic_id') professional_clinic_id: string,
  ): Promise<Professional[]> {
    return this.professionalService.findAllyClinicId(professional_clinic_id);
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
    return this.s3ProfessionalPhotoService.uploadFile(
      file.buffer,
      file.originalname,
    );
  }
}
