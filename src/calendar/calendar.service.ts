import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Calendar } from './entities/calendar.entity';
import { CalendarAlertService } from '../calendar-alert/calendar-alert.service';
import { CreateCalendarAlertDTO } from '../calendar-alert/dto/create-calendar-alert.dto';
import { EmailService } from '../email/email.service';
import * as nodemailer from 'nodemailer';
import { parseNumberToWhatsapp } from '../helpers/string-helpers';

@Injectable()
export class CalendarService {
  constructor(
    @Inject('Calendar')
    private calendarRepository: Repository<Calendar>,
    private readonly alertService: CalendarAlertService,
    private readonly emailService: EmailService,
  ) {}

  async create(
    dtoPayload: Calendar,
    calendar_clinic_id: string,
  ): Promise<Calendar> {
    const schedule = await this.calendarRepository.save({
      ...dtoPayload,
      calendar_clinic_id,
    });

    const payload: CreateCalendarAlertDTO = {
      alert_phone: schedule.calendar_phone
        ? '55' + parseNumberToWhatsapp(schedule.calendar_phone)
        : '',
      alert_clinic_id: calendar_clinic_id,
      alert_calendar_id: schedule.calendar_id,
      alert_name: schedule.calendar_name,
      alert_date: schedule.calendar_date,
      alert_email: schedule.calendar_email,
      alert_start_time: schedule.calendar_start_time,
      alert_end_time: schedule.calendar_end_time,
      alert_clinic_name: '',
      alert_send_wpp: 1,
      alert_send_email: 1,
    };

    await this.alertService.create(payload);

    // Após salvar a agenda, enviar um e-mail
    schedule.calendar_email &&
      this.sendAppointmentPatientEmail(
        schedule.calendar_email,
        schedule.calendar_name,
        schedule.calendar_date,
        schedule.calendar_start_time,
        schedule.calendar_end_time,
      );

    return schedule;
  }

  async findOne(calendar_id: string): Promise<Calendar> {
    const calendar = await this.calendarRepository.findOne({
      where: { calendar_id },
    });
    if (!calendar) {
      throw new NotFoundException(
        `Calendar with ID "${calendar_id}" not found`,
      );
    }
    return calendar;
  }

  async update(
    calendar_id: string,
    dtoPayload: Partial<Calendar>,
  ): Promise<Calendar> {
    await this.calendarRepository.update(calendar_id, dtoPayload);

    const schedule = await this.calendarRepository.findOne({
      where: { calendar_id },
      relations: ['alerts'],
    });

    if (!schedule) {
      throw new NotFoundException(
        `Registro com ID ${calendar_id} não encontrado.`,
      );
    }

    schedule.alerts.length &&
      (await this.alertService.removeFromAgendamento(
        schedule.alerts.map((alert) => alert.alert_calendar_id),
      ));

    const payload: CreateCalendarAlertDTO = {
      alert_phone: schedule.calendar_phone
        ? '55' + parseNumberToWhatsapp(schedule.calendar_phone)
        : '',
      alert_clinic_id: schedule.calendar_clinic_id,
      alert_calendar_id: schedule.calendar_id,
      alert_name: schedule.calendar_name,
      alert_date: schedule.calendar_date,
      alert_email: schedule.calendar_email,
      alert_start_time: schedule.calendar_start_time,
      alert_end_time: schedule.calendar_end_time,
      alert_clinic_name: '',
      alert_send_wpp: 1,
      alert_send_email: 1,
    };

    await this.alertService.create(payload);

    // Envia o e-mail de agendamento com os detalhes ajustados
    this.sendAppointmentPatientEmail(
      schedule.calendar_email,
      schedule.calendar_name,
      schedule.calendar_date,
      schedule.calendar_start_time,
      schedule.calendar_end_time,
    );

    return schedule;
  }

  async remove(calendar_id: string): Promise<void> {
    const result = await this.calendarRepository.delete(calendar_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Calendar with ID ${calendar_id} not found`);
    }
  }

  async findAllByClinicId(calendar_clinic_id: string): Promise<Calendar[]> {
    return this.calendarRepository.find({ where: { calendar_clinic_id } });
  }

  async findAllyClinicId(calendar_clinic_id: string): Promise<Calendar[]> {
    return this.calendarRepository.find({
      where: { calendar_clinic_id },
    });
  }

  private async sendAppointmentPatientEmail(
    email: string,
    name: string,
    calendar_date: Date | string,
    calendar_start_time: string,
    calendar_end_time: string,
  ) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'email-smtp.sa-east-1.amazonaws.com',
        port: 587,
        secure: false,
        auth: {
          user: 'AKIARVCGL4JYQS4JP7N7',
          pass: 'BNcxg686iywrBaquc/KRrU+AZfbPASntoitZkAZM9rVw',
        },
      });

      // Certifique-se de que calendar_date é um objeto Date
      if (typeof calendar_date === 'string') {
        calendar_date = new Date(calendar_date + 'T00:00:00');
      }

      // Agora você pode usar calendar_date.toLocaleDateString() com segurança
      const calendar_dateFormatada = calendar_date.toLocaleDateString('pt-BR');

      // Gera o HTML a partir do template Handlebars passando os dados necessários, incluindo o passwordMobileAndWeb
      const html = await this.emailService.getTemplate(
        {
          name,
          calendar_date: calendar_dateFormatada,
          calendar_start_time,
          calendar_end_time,
        },
        'src/calendar/templates/scheduling_patient.hbs',
      );

      await transporter.sendMail({
        from: '"OdontCloud" <no-reply@dietsystem.com.br>',
        to: email,
        subject: 'Aviso: Agendamento de consulta ',
        html,
      });
    } catch (error) {
      console.error('Error sending email', error);
    }
  }

  async findAllByDataConsultaAndProfissional(
    calendar_date: string,
    calendar_clinic_id: string,
  ): Promise<Partial<Calendar>[]> {
    return this.calendarRepository.find({
      where: { calendar_clinic_id, calendar_date },
    });
  }

  async updateAppointmentStatus(
    calendar_id: string,
    status: 'CONFIRMED' | 'CANCELLED',
  ): Promise<boolean> {
    const appointment = await this.calendarRepository.findOne({
      where: { calendar_id },
    });
    if (appointment) {
      appointment.calendar_status = status;
      await this.calendarRepository.save(appointment);
      return true;
    }
    return false;
  }
}
