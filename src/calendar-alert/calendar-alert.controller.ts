import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CalendarAlertService } from './calendar-alert.service';
import { CalendarAlert } from './entities/calendar-alert.entity';

@Controller('alert')
export class CalendarAlertController {
  constructor(private readonly alertService: CalendarAlertService) {}

  @Post()
  create(@Body() alertDetails: CalendarAlert): Promise<CalendarAlert> {
    return this.alertService.create(alertDetails);
  }

  @Get(':alert_id')
  findOne(@Param('alert_id') alert_id: string): Promise<CalendarAlert> {
    return this.alertService.findOne(alert_id);
  }

  @Patch(':alert_id')
  update(
    @Param('alert_id') alert_id: string,
    @Body() alertDetails: Partial<CalendarAlert>,
  ): Promise<CalendarAlert> {
    return this.alertService.update(alert_id, alertDetails);
  }

  @Delete(':alert_id')
  remove(@Param('alert_id') alert_id: string): Promise<void> {
    return this.alertService.remove(alert_id);
  }
}
