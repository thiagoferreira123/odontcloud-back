import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CalendarAlert } from './entities/calendar-alert.entity';
import { Cron } from '@nestjs/schedule';
import * as nodemailer from 'nodemailer';
import { CreateCalendarAlertDTO } from './dto/create-calendar-alert.dto';
import { EmailService } from '../email/email.service';
import { parseTimeToBR } from '../helpers/date-helper';

const apiUrl = 'https://api.odontcloud.com.br';
export const appUrl = 'https://dash.odontcloud.com.br/';
const wppBotUrl = 'https://whats-alert.dietsystem.com.br';

@Injectable()
export class CalendarAlertService {
  constructor(
    @Inject('CalendarAlert')
    private alertRepository: Repository<CalendarAlert>,
    private readonly emailService: EmailService,
  ) {}

  async create(alertDetails: CreateCalendarAlertDTO): Promise<CalendarAlert> {
    return this.alertRepository.save(alertDetails);
  }

  async findOne(alert_id: string): Promise<CalendarAlert> {
    const alert = await this.alertRepository.findOne({
      where: { alert_id },
    });
    if (!alert) {
      throw new NotFoundException(
        `CalendarAlert with ID "${alert_id}" not found`,
      );
    }
    return alert;
  }

  async update(
    alert_id: string,
    alertDetails: Partial<CalendarAlert>,
  ): Promise<CalendarAlert> {
    const alert = await this.findOne(alert_id);
    return this.alertRepository.save({ ...alert, ...alertDetails });
  }

  async remove(alert_id: string): Promise<void> {
    const result = await this.alertRepository.delete(alert_id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `CalendarAlert with ID ${alert_id} not found`,
      );
    }
  }

  async removeFromAgendamento(ids: string[]): Promise<void> {
    await this.alertRepository.delete(ids);
  }

  @Cron('0 0 7 * * *') // Roda todos os dias às 10h UTC
  // @Cron(CronExpression.EVERY_30_SECONDS) // Roda todos os dias às 10h UTC
  async handleCron() {
    const alerts = await this.alertRepository.find();

    if (!alerts.length) return console.log('No alerts to handle');

    for (const alert of alerts) {
      try {
        if (alert.alert_date) {
          const today = new Date();
          const oneDayAfter = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1,
          );
          const alertDate = new Date(alert.alert_date + 'T00:00:00');

          const alertDateISO = alertDate.toISOString().split('T')[0];
          const oneDayAfterISO = oneDayAfter.toISOString().split('T')[0];

          if (alertDateISO !== oneDayAfterISO) {
            continue;
          }
        } else {
          continue;
        }

        alert.alert_send_email &&
          alert.alert_email?.length &&
          (await this.sendAppointmentPatientEmail(
            alert.alert_email,
            alert.alert_name,
            alert.alert_date,
            alert.alert_start_time,
            alert.alert_end_time,
            alert.alert_calendar_id,
          ));

        alert.alert_send_wpp &&
          alert.alert_phone?.length &&
          (await this.sendAppointmentPatientWhatsApp(alert));

        this.remove(alert.alert_id);
      } catch (error) {
        console.error('Error handling alert', error);
      }
    }
  }

  private async sendAppointmentPatientEmail(
    email: string,
    name: string,
    scheduleDate: Date | string,
    startTime: string,
    endTime: string,
    schedule_id: string,
  ) {
    const transporter = nodemailer.createTransport({
      host: 'email-smtp.sa-east-1.amazonaws.com',
      port: 587,
      secure: false,
      auth: {
        user: 'AKIARVCGL4JYQS4JP7N7',
        pass: 'BNcxg686iywrBaquc/KRrU+AZfbPASntoitZkAZM9rVw',
      },
    });

    // Certifique-se de que scheduleDate é um objeto Date
    if (typeof scheduleDate === 'string') {
      scheduleDate = new Date(scheduleDate + 'T00:00:00');
    }

    // Agora você pode usar scheduleDate.toLocaleDateString() com segurança
    const scheduleDateFormatada = scheduleDate.toLocaleDateString('pt-BR');

    const confirmLink = `${apiUrl}/calendar/confirm/${schedule_id}`;
    const cancelLink = `${apiUrl}/calendar/cancel/${schedule_id}`;

    // Gera o HTML a partir do template Handlebars passando os dados necessários, incluindo o passwordMobileAndWeb
    const html = await this.emailService.getTemplate(
      {
        name,
        scheduleDate: scheduleDateFormatada,
        startTime,
        endTime,
        confirmLink,
        cancelLink,
      },
      'src/calendar-alert/templates/alert_patient.hbs',
    );

    await transporter.sendMail({
      from: '"OdontCloud" <no-reply@dietsystem.com.br>',
      to: email,
      subject: 'Lembrete: Você tem uma consulta em breve',
      html,
    });
    try {
    } catch (error) {
      console.error('Error sending email', error);
    }
  }

  private async sendAppointmentPatientWhatsApp(alert: CalendarAlert) {
    try {
      const firstName = alert.alert_name.split(' ')[0]; // Isso pega a primeira palavra de 'alert_name'

      if (typeof alert.alert_date === 'string') {
        alert.alert_date = new Date(
          alert.alert_date + 'T00:00:00',
        ).toLocaleDateString('pt-BR');
      }

      const message = `🍏 *Confirmação de Consulta*

Olá *${firstName}*, tudo bem?

Você tem uma consulta agendada no dia *${alert.alert_date}* às *${parseTimeToBR(alert.alert_start_time)}*.

Você poderia confirmar sua presença?

Digite a opção correspondente:

*[1]* para confirmar ✅
*[2]* para cancelar ❌`;

      if (!alert.alert_clinic_id)
        return console.log('Professional ID not found');

      const postData = {
        id: alert.alert_phone.replace(/\D/g, ''),
        message: message, // Enviar a mensagem personalizada
        context: {
          webhookUrls: [
            `${apiUrl}/calendar/confirm/${alert.alert_calendar_id}`,
            `${apiUrl}/calendar/cancel/${alert.alert_calendar_id}`,
          ],
          responseOptions: ['1', '2'],
        },
      };

      alert.alert_send_wpp &&
        fetch(
          `${wppBotUrl}/message/text?key=odont_clinic_${alert.alert_clinic_id}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          },
        )
          .then(() => console.log(`Alert sent for ${alert.alert_name}`))
          .catch(async (error) => {
            if (error instanceof Response) {
              return console.error(
                `Error sending alert for ${alert.alert_name}`,
                error.statusText,
              );
            }

            console.error(
              `Error sending alert for ${alert.alert_name}`,
              'Erro desconhecido',
            );
          });
    } catch (error) {
      console.error('Error sending WhatsApp message', error);
    }
  }

  // @Cron(CronExpression.EVERY_30_SECONDS)
  // async handleCronWpp() {
  //   const alerts = await this.alertRepository.find();
  //   alerts.forEach((alert) => {
  //     // Extrair o primeiro nome de 'alert_name'
  //     const firstName = alert.alert_name.split(' ')[0]; // Isso pega a primeira palavra de 'alert_name'

  //     // Criar a mensagem personalizada
  //     const message = `Olá ${firstName}, você tem uma consulta agendada para o dia ${parseIsoDateToBR(alert.alert_date)} às ${alert.alert_start_time}.`;

  //     const postData = {
  //       number: '55' + alert.alert_phone,
  //       userId: alert.alert_clinic_id, // Enviar 'firstName' junto
  //       message: message, // Enviar a mensagem personalizada
  //     };

  //     alert.alert_send_wpp &&
  //       axios
  //         .post('http://localhost:3002/send-message', postData)
  //         .then(() => console.log(`Alert sent for ${alert.alert_name}`))
  //         .catch((error) =>
  //           console.error(`Error sending alert for ${alert.alert_name}`, error),
  //         );
  //   });
  // }
}
