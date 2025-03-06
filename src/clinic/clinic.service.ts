import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Equal, MoreThan, Not, Repository } from 'typeorm';
import { Clinic } from './entities/clinic.entity';
import Handlebars from 'handlebars';
import * as nodemailer from 'nodemailer';
import * as argon2 from 'argon2';
import * as path from 'path';
import * as fs from 'fs';
import * as moment from 'moment';
import { JwtService } from '@nestjs/jwt';
import { UpdateClinicDto } from './dto/update-clinic.dto';
import { Patient } from 'src/patient/entities/patient.entity';
import { Cron } from '@nestjs/schedule';
import { parseNumberToWhatsapp } from 'src/helpers/string-helpers';
import { wppBotUrl } from 'src/whatsapp-message/whatsapp-message.service';
import { PatientService } from 'src/patient/patient.service';

export interface JWTBody {
  clinic_id: string;
  clinic_full_name: string;
  clinic_email: string;
}

@Injectable()
export class ClinicService {
  private issuer = 'login';
  private audience = 'clinic';

  constructor(
    @Inject('Clinic')
    private clinicRepository: Repository<Clinic>,
    private readonly patientService: PatientService,
    private readonly jwtService: JwtService,
  ) {}

  createToken(clinic: Clinic) {
    return {
      accessToken: this.jwtService.sign(
        {
          clinic_id: clinic.clinic_id,
          clinic_full_name: clinic.clinic_full_name,
          clinic_email: clinic.clinic_email,
        },
        {
          expiresIn: '7 days',
          subject: String(clinic.clinic_id),
          issuer: this.issuer,
          audience: this.audience,
        },
      ),
    };
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        issuer: this.issuer,
        audience: this.audience,
      });
      return data;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  isValidToken(token: string) {
    try {
      this.checkToken(token);
      return true;
    } catch (e) {
      return false;
    }
  }

  async create(clinicDetails: Clinic) {
    const emailExists = await this.clinicRepository.findOne({
      where: { clinic_email: clinicDetails.clinic_email },
    });

    if (emailExists) {
      throw new ConflictException('email already in use');
    }

    clinicDetails.clinic_password = await argon2.hash(
      clinicDetails.clinic_password,
    );

    const clinic = await this.clinicRepository.save(clinicDetails);

    const { accessToken } = this.createToken(clinic);

    const clinicInfo = { ...clinic, senha: undefined };

    return { accessToken, clinic: clinicInfo };
  }

  async findOne(clinic_id: string): Promise<Clinic> {
    const clinic = await this.clinicRepository.findOne({
      where: { clinic_id },
      relations: ['whatsappConfigurations'],
    });
    if (!clinic) {
      throw new NotFoundException(`Clinic with ID "${clinic_id}" not found`);
    }
    return clinic;
  }

  async findOneByStripeCustomerId(stripeCustomerId: string): Promise<Clinic> {
    return this.clinicRepository.findOne({
      where: { clinic_stripe_customer_id: stripeCustomerId },
      relations: ['subscription'],
    });
  }

  async update(
    clinic_id: string,
    clinicDetails: UpdateClinicDto,
  ): Promise<Clinic> {
    const clinic = await this.clinicRepository.findOne({
      where: { clinic_id },
    });

    if (!clinic) {
      throw new NotFoundException(`Clinic with ID ${clinic_id} not found`);
    }

    if (clinicDetails.clinic_email) {
      const emailExists = await this.clinicRepository.findOne({
        where: {
          clinic_email: clinicDetails.clinic_email,
          clinic_id: Not(Equal(clinic_id)),
        },
      });

      if (emailExists) {
        throw new ConflictException('email already in use by another clinic');
      }
    }

    Object.assign(clinic, clinicDetails);
    return this.clinicRepository.save(clinic);
  }

  async remove(clinic_id: string): Promise<void> {
    const clinic = await this.findOne(clinic_id);
    await this.clinicRepository.remove(clinic);
  }

  async validateClinic(email: string, pass: string): Promise<any> {
    const clinic = await this.clinicRepository.findOne({
      where: { clinic_email: email },
    });

    if (clinic) {
      const passwordMatches = await argon2.verify(clinic.clinic_password, pass);
      if (passwordMatches) {
        return { ...clinic, clinic_password: undefined };
      }
    }
    throw new UnauthorizedException('Incorrect email or password.');
  }

  async login(clinic_email: string, clinic_password: string) {
    let clinic: Clinic = await this.clinicRepository.findOneBy({
      clinic_email,
    });

    if (!clinic) {
      // Caso necessário, repete a busca ou trate conforme sua lógica
      clinic = await this.clinicRepository.findOneBy({ clinic_email });
      if (!clinic)
        throw new UnauthorizedException('E-mail e/ou senha incorretos.');
    }

    if (!(await argon2.verify(clinic.clinic_password, clinic_password))) {
      throw new UnauthorizedException('E-mail e/ou senha incorretos.');
    }

    const { accessToken } = this.createToken(clinic);

    // Cria uma nova instância para garantir que os métodos da classe sejam mantidos
    const clinicInfo = new Clinic();
    Object.assign(clinicInfo, clinic);
    clinicInfo.clinic_password = undefined;

    return { accessToken, clinic: clinicInfo };
  }

  async requestPasswordReset(email: string): Promise<void> {
    const resetToken = Math.floor(10000 + Math.random() * 90000).toString();
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 10);

    const clinic = await this.clinicRepository.findOne({
      where: { clinic_email: email },
    });
    if (!clinic) {
      throw new Error('clinic not found');
    }

    clinic.clinic_reset_password_token = resetToken;
    clinic.clinic_reset_password_token_expires = expirationDate;
    await this.clinicRepository.save(clinic);

    await this.sendResetEmail(email, resetToken);
  }

  private async sendResetEmail(
    email: string,
    resetToken: string,
  ): Promise<void> {
    const transporter = nodemailer.createTransport({
      host: 'email-smtp.sa-east-1.amazonaws.com',
      port: 587,
      secure: false,
      auth: {
        user: 'AKIARVCGL4JYQS4JP7N7',
        pass: 'BNcxg686iywrBaquc/KRrU+AZfbPASntoitZkAZM9rVw',
      },
    });

    const templatePath = path.join(
      __dirname,
      '..',
      '..',
      'src',
      'clinic',
      'templates',
      'forget.hbs',
    );
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    const template = Handlebars.compile(templateContent);
    const emailHtml = template({ resetToken });
    const mailOptions = {
      from: '"OdontoCloud" <no-reply@dietsystem.com.br>',
      to: email,
      subject: 'Seu código de redefinição de senha',
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);
  }

  async resetPassword(
    token: string,
    newPassword: string,
    confirmPassword: string,
  ): Promise<void> {
    if (newPassword !== confirmPassword) {
      throw new BadRequestException('Passwords do not match.');
    }

    const clinic = await this.clinicRepository.findOne({
      where: {
        clinic_reset_password_token: token,
        clinic_reset_password_token_expires: MoreThan(new Date()),
      },
    });

    if (!clinic) {
      throw new NotFoundException('Invalid or expired reset token.');
    }

    clinic.clinic_password = await argon2.hash(newPassword);
    clinic.clinic_reset_password_token = null;
    clinic.clinic_reset_password_token_expires = null;

    await this.clinicRepository.save(clinic);
  }

  async showUser(clinic_id: string): Promise<Clinic> {
    return this.clinicRepository.findOne({ where: { clinic_id } });
  }

  async updatePassword(
    clinic_id: string,
    clinic_current_password: string,
    clinic_new_password: string,
  ): Promise<string> {
    const clinic = await this.clinicRepository.findOneBy({
      clinic_id,
    });

    if (!clinic) {
      throw new NotFoundException('User not found.');
    }

    const isPasswordMatching = await argon2.verify(
      clinic.clinic_password,
      clinic_current_password,
    );

    if (!isPasswordMatching) {
      throw new BadRequestException('Current password is incorrect.');
    }

    const newHash = await argon2.hash(clinic_new_password);

    await this.clinicRepository.update(clinic_id, { clinic_password: newHash });

    return 'Password updated successfully!';
  }

  async updateByEmail(
    clinic_email: string,
    data: UpdateClinicDto,
  ): Promise<string> {
    const clinic = await this.clinicRepository.findOneBy({
      clinic_email,
    });

    if (!clinic) {
      throw new NotFoundException('Clinic not found.');
    }

    await this.clinicRepository.update(clinic.clinic_id, data);

    return 'Clinic updated successfully!';
  }

  async getClinicPdfData(clinic_id: string): Promise<Clinic> {
    const clinic = await this.clinicRepository.findOne({
      where: { clinic_id },
    });

    if (!clinic) {
      throw new HttpException('Clinic not found', HttpStatus.NOT_FOUND);
    }

    // const clinic_logo_link = clinic.clinic_logo_link
    //   ? clinic.clinic_logo_link
    //   : 'https://odontcloud.com.br/imagens_sitenews/logo.webp';

    // return { ...clinic, clinic_logo_link };
    return clinic;
  }

  /**
   * Cron jobs
   */

  // Send whatsapp to patient congratulating them on their birthday
  // @Cron('*/10 * * * * *')
  @Cron('0 0 7 * * *', {
    name: 'notifications',
    timeZone: 'America/Sao_Paulo',
  })
  async checkPatientBirthdays(): Promise<void> {
    const clinics = await this.clinicRepository.find({
      select: ['clinic_id'],
      relations: ['whatsappConfigurations'],
    });

    const today = moment().format('MM-DD');

    for (const clinic of clinics) {
      if (
        !clinic.whatsappConfigurations?.length ||
        !clinic.whatsappConfigurations[0].whatsapp_message_happy_birthday
      )
        continue;

      const patients = await this.patientService.findBirthdayPatients(
        clinic.clinic_id,
        today,
      );

      for (const patient of patients) {
        if (
          clinic.whatsappConfigurations?.length &&
          clinic.whatsappConfigurations[0].whatsapp_message_happy_birthday
        ) {
          await this.sendBirthdayWhatsApp(
            patient,
            clinic.whatsappConfigurations[0].whatsapp_message_happy_birthday,
          );
        }
      }
    }
  }

  private async sendBirthdayWhatsApp(
    patient: Patient,
    whatsapp_message_happy_birthday: string,
  ) {
    try {
      const firstName = patient.patient_full_name.split(' ')[0];

      const message = whatsapp_message_happy_birthday.length
        ? whatsapp_message_happy_birthday
        : 'Olá [Patient], hoje é o seu dia! 🎉🎂';

      const postData = {
        id: patient.patient_phone
          ? parseNumberToWhatsapp(patient.patient_phone).replace(/\D/g, '')
          : '',
        message: message.replaceAll('[Patient]', firstName),
      };

      fetch(`${wppBotUrl}/message/text?key=odonto_${patient.clinic}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then(() =>
          console.log(`Birthday sent for ${patient.patient_full_name}`),
        )
        .catch(async (error) => {
          if (error instanceof Response) {
            return console.error(
              `Error sending patient for ${patient.patient_full_name}`,
              error.statusText,
            );
          }

          console.error(
            `Error sending patient for ${patient.patient_full_name}`,
            'Erro desconhecido',
          );
        });
    } catch (error) {
      console.error('Error sending WhatsApp message', error);
    }
  }
}
