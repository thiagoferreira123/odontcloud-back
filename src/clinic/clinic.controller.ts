import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Response,
  UnauthorizedException,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Clinic } from './entities/clinic.entity';
import { ClinicService } from './clinic.service';
import { AuthGuard } from '../guards/auth.guard';
import { ClinicDecorator } from '../decorators/clinic.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3ClinicSignatureServiceC } from './S3ClinicSignatureServiceC';
import { S3ClinicLogoService } from './S3ClinicLogoService';
import { UpdateClinicDto } from './dto/update-clinic.dto';

@Controller('clinic')
export class ClinicController {
  constructor(
    private readonly clinicService: ClinicService,
    private readonly s3ClinicLogoService: S3ClinicLogoService,
    private readonly s3ClinicSignatureervice: S3ClinicSignatureServiceC,
  ) {}

  @Post()
  async create(@Body() clinicDetails: Clinic, @Response() res) {
    const { accessToken, clinic } =
      await this.clinicService.create(clinicDetails);

    // const expiresInDays = 1;
    // const expirationDate = new Date(
    //   new Date().getTime() + expiresInDays * 24 * 60 * 60 * 1000,
    // );

    res.cookie('accessToken', accessToken, {
      // expires: expirationDate,
      sameSite: 'None',
      secure: true,
      // httpOnly: true,
    });

    res.send(clinic);
  }

  @Post('login')
  async login(
    @Body() { email, password }: { email: string; password: string },
    @Response() res,
  ) {
    try {
      const { accessToken, clinic } = await this.clinicService.login(
        email,
        password,
      );

      res.cookie('accessToken', accessToken, {
        sameSite: 'None',
        secure: true,
      });

      res.send({ ...clinic, cookies: res.cookies });
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }

      console.error(error);
      throw new HttpException('Unauthenticated', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('logout')
  logout(@Response() res) {
    res.clearCookie('accessToken');
    res.send();

    return {};
  }

  @UseGuards(AuthGuard)
  @Get('check-auth')
  authTest(@ClinicDecorator() clinic) {
    return clinic;
  }

  @Get(':clinic_id')
  findOne(@Param('clinic_id') clinic_id: string): Promise<Clinic> {
    return this.clinicService.findOne(clinic_id);
  }

  @UseGuards(AuthGuard)
  @Put()
  update(
    @ClinicDecorator('clinic_id') clinic_id: string,
    @Body() payload: UpdateClinicDto,
  ): Promise<Clinic> {
    return this.clinicService.update(clinic_id, payload);
  }

  @UseGuards(AuthGuard)
  @Delete('upload-logo/')
  async deleteLogo(
    @Body() params: { url: string },
    @ClinicDecorator('clinic_id') clinic_id: string,
  ): Promise<void> {
    await this.clinicService.update(clinic_id, {
      clinic_logo_link: '',
    });
    return await this.s3ClinicLogoService.deleteFile(params.url);
  }

  @UseGuards(AuthGuard)
  @Delete('upload-signature/')
  async deleteSignature(
    @Body() params: { url: string },
    @ClinicDecorator('clinic_id') clinic_id: string,
  ): Promise<void> {
    await this.clinicService.update(clinic_id, {
      clinic_signature_link: '',
    });
    return await this.s3ClinicSignatureervice.deleteFile(params.url);
  }

  @UseGuards(AuthGuard)
  @Delete()
  remove(@ClinicDecorator('clinic_id') clinic_id: string): Promise<void> {
    return this.clinicService.remove(clinic_id);
  }

  @Post('request-password-reset')
  async requestPasswordReset(@Body() body: { email: string }) {
    await this.clinicService.requestPasswordReset(body.email);
    return {
      message:
        'If a clinic with that email exists, we have sent an email with a password reset code.',
    };
  }

  @Post('reset-password')
  async resetPassword(
    @Body()
    body: {
      token: string;
      newPassword: string;
      confirmPassword: string;
    },
  ) {
    await this.clinicService.resetPassword(
      body.token,
      body.newPassword,
      body.confirmPassword,
    );
    return { message: 'Password has been successfully reset.' };
  }

  @UseGuards(AuthGuard)
  @Post('/update-password/')
  @HttpCode(HttpStatus.OK)
  async updatePassword(
    @ClinicDecorator('clinic_id') clinic_id: string,
    @Body('clinic_current_password') clinic_current_password: string,
    @Body('clinic_new_password') clinic_new_password: string,
  ) {
    const response = await this.clinicService.updatePassword(
      clinic_id,
      clinic_current_password,
      clinic_new_password,
    );
    return { message: response };
  }

  @Post('upload-logo')
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
  async uploadLogo(@UploadedFile() file: Express.Multer.File) {
    return this.s3ClinicLogoService.uploadFile(file.buffer, file.originalname);
  }

  @Post('upload-signature')
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
    return this.s3ClinicSignatureervice.uploadFile(
      file.buffer,
      file.originalname,
    );
  }
}
