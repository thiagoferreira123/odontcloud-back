import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { Calendar } from './entities/calendar.entity';
import { AuthGuard } from '../guards/auth.guard';
import { ClinicDecorator } from '../decorators/clinic.decorator';
import { Response } from 'express';
import { appUrl } from '../calendar-alert/calendar-alert.service';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @Body() calendarDetails: Calendar,
    @ClinicDecorator('clinic_id') calendar_clinic_id: string,
  ): Promise<Calendar> {
    return this.calendarService.create(calendarDetails, calendar_clinic_id);
  }

  @UseGuards(AuthGuard)
  @Get('by-clinic')
  findAllyClinicId(
    @ClinicDecorator('clinic_id') calendar_clinic_id: string,
  ): Promise<Calendar[]> {
    return this.calendarService.findAllyClinicId(calendar_clinic_id);
  }

  @Get(':calendar_id')
  findOne(@Param('calendar_id') calendar_id: string): Promise<Calendar> {
    return this.calendarService.findOne(calendar_id);
  }

  @Put(':calendar_id')
  update(
    @Param('calendar_id') calendar_id: string,
    @Body() calendarDetails: Partial<Calendar>,
  ): Promise<Calendar> {
    return this.calendarService.update(calendar_id, calendarDetails);
  }

  @Delete(':calendar_id')
  remove(@Param('calendar_id') calendar_id: string): Promise<void> {
    return this.calendarService.remove(calendar_id);
  }

  @UseGuards(AuthGuard)
  @Get('calendar_date/:calendar_date/by-clinic/')
  async findAllByDataConsultaAndProfissional(
    @Param('calendar_date') calendar_date: string,
    @ClinicDecorator('clinic_id') calendar_clinic_id: string,
  ): Promise<Partial<Calendar>[]> {
    const agendas =
      await this.calendarService.findAllByDataConsultaAndProfissional(
        calendar_date,
        calendar_clinic_id,
      );

    return agendas;
  }

  @Get('confirm/:calendar_id')
  async confirmAppointment(
    @Param('calendar_id') calendar_id: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const result = await this.calendarService.updateAppointmentStatus(
      calendar_id,
      'CONFIRMED',
    );
    if (result) {
      if (req.headers['accept'].includes('application/json')) {
        res
          .status(HttpStatus.OK)
          .json({ message: 'Agendamento confirmado com sucesso.' });
      } else {
        res.redirect(`${appUrl}/agendamento-confirmado`);
      }
    } else {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'Falha ao confirmar agendamento.' });
    }
  }

  @Get('cancel/:calendar_id')
  async cancelAppointment(
    @Param('calendar_id') calendar_id: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const result = await this.calendarService.updateAppointmentStatus(
      calendar_id,
      'CANCELLED',
    );
    if (result) {
      if (req.headers['accept'].includes('application/json')) {
        res
          .status(HttpStatus.OK)
          .json({ message: 'Agendamento cancelado com sucesso.' });
      } else {
        res.redirect(`${appUrl}/agendamento-cancelado`);
      }
    } else {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'Falha ao cancelar agendamento.' });
    }
  }
}
