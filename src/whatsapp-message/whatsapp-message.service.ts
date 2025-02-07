import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateWhatsappMessageDto } from './dto/create-whatsapp-message.dto';
import { UpdateWhatsappMessageDto } from './dto/update-whatsapp-message.dto';
import { WhatsappMessage } from './entities/whatsapp-message.entity';
import { Repository } from 'typeorm';
import { parseNumberToWhatsapp } from 'src/helpers/string-helpers';
import { Clinic } from 'src/clinic/entities/clinic.entity';
import { PatientService } from 'src/patient/patient.service';

@Injectable()
export class WhatsappMessageService {
  constructor(
    @Inject('WhatsappMessage')
    private whatsappMessageRepository: Repository<WhatsappMessage>,
    @Inject('Clinic')
    private clinicRepository: Repository<Clinic>,
    private readonly patientService: PatientService,
  ) {}

  async create(
    createWhatsappMessageDto: CreateWhatsappMessageDto,
    whatsapp_message_clinic_id: string,
  ): Promise<WhatsappMessage> {
    const whatsappMessage = this.whatsappMessageRepository.create({
      ...createWhatsappMessageDto,
      whatsapp_message_clinic_id,
    });
    await this.whatsappMessageRepository.save(whatsappMessage);

    return await this.whatsappMessageRepository.findOne({
      where: { whatsapp_message_clinic_id },
    });
  }

  async findOneByclinicId(clinicId: string): Promise<WhatsappMessage> {
    const whatsappMessage = await this.whatsappMessageRepository.findOne({
      where: { whatsapp_message_clinic_id: clinicId },
    });
    if (!whatsappMessage) {
      throw new NotFoundException(
        `Whatsapp message with professional id ${clinicId} not found`,
      );
    }
    return whatsappMessage;
  }

  async update(
    id: string,
    updateWhatsappMessageDto: UpdateWhatsappMessageDto,
  ): Promise<WhatsappMessage> {
    const whatsappMessage = await this.whatsappMessageRepository.findOne({
      where: { whatsapp_message_id: id },
    });
    if (!whatsappMessage) {
      throw new NotFoundException(`Whatsapp message with id ${id} not found`);
    }
    this.whatsappMessageRepository.merge(
      whatsappMessage,
      updateWhatsappMessageDto,
    );
    return await this.whatsappMessageRepository.save(whatsappMessage);
  }

  async remove(id: string): Promise<void> {
    const whatsappMessage = await this.whatsappMessageRepository.findOne({
      where: { whatsapp_message_id: id },
    });
    if (!whatsappMessage) {
      throw new NotFoundException(`Whatsapp message with id ${id} not found`);
    }
    await this.whatsappMessageRepository.remove(whatsappMessage);
  }

  async sendAppointmentCancelationByProfessionalAlert(
    patientId: string,
    whatsapp_message_clinic_id: string,
  ): Promise<void> {
    try {
      const professional = await this.clinicRepository.findOne({
        select: ['clinic_id'],
        relations: ['whatsappConfigurations'],
        where: { clinic_id: whatsapp_message_clinic_id },
      });

      if (
        !professional?.whatsappConfigurations?.[0]
          ?.whatsapp_message_appointment_cancellation?.length
      ) {
        throw new BadRequestException(
          'Professional has no whatsapp configuration',
        );
      }

      const patient = await this.patientService.findOne(patientId);

      if (!patient) {
        throw new BadRequestException('Patient not found');
      }

      console.log(
        `Sending appointment cancelation for ${patient.patient_full_name}`,
      );

      const postData = {
        id: patient.patient_phone
          ? parseNumberToWhatsapp(patient.patient_phone).replace(/\D/g, '')
          : '',
        message:
          professional.whatsappConfigurations[0]
            .whatsapp_message_appointment_cancellation,
      };

      await fetch(
        `${wppBotUrl}/message/text?key=odonto_${patient.patient_clinic_id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        },
      );

      console.log(
        `Appointment cancelation sent for ${patient.patient_full_name}`,
      );
    } catch (error) {
      const errorMessage =
        error instanceof Response
          ? error.statusText
          : 'Erro desconhecido ao enviar mensagem de appointment cancelation';

      console.error(
        `Error sending appointment cancelation for ${patientId}`,
        errorMessage,
      );

      return error;
    }
  }

  async deactivateMessages(clinicId: string) {
    if (!clinicId) return;
    const messages = await this.whatsappMessageRepository.findOne({
      where: { whatsapp_message_clinic_id: clinicId },
    });

    if (!messages) return;

    await this.whatsappMessageRepository.update(messages.whatsapp_message_id, {
      whatsapp_message_happy_birthday: '',
      whatsapp_message_appointment_scheduling: '',
      whatsapp_message_welcome: '',
      whatsapp_message_appointment_cancellation: '',
      whatsapp_message_appointment_confirmation: '',
    });
  }
}

export const wppBotUrl = 'https://whats-alert.dietsystem.com.br';
