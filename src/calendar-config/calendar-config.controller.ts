import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CalendarConfigService } from './calendar-config.service';
import { CalendarConfig } from './entities/calendar-config.entity';
import { AuthGuard } from '../guards/auth.guard';
import { ClinicDecorator } from '../decorators/clinic.decorator';

@UseGuards(AuthGuard)
@Controller('calendar-config')
export class CalendarConfigController {
  constructor(private readonly calendarConfigService: CalendarConfigService) {}

  @Post()
  create(
    @Body() calendarConfigDetails: CalendarConfig,
    @ClinicDecorator('clinic_id') calendar_config_clinic_id: string,
  ): Promise<CalendarConfig> {
    return this.calendarConfigService.create(
      calendarConfigDetails,
      calendar_config_clinic_id,
    );
  }

  @Get()
  findOne(@Param('calendar_id') calendar_id: string): Promise<CalendarConfig> {
    return this.calendarConfigService.findOne(calendar_id);
  }

  @Get('by-clinic/')
  findOneByClinic(
    @ClinicDecorator('clinic_id') calendar_config_clinic_id: string,
  ): Promise<CalendarConfig> {
    return this.calendarConfigService.findOneByClinic(
      calendar_config_clinic_id,
    );
  }

  @Put(':calendar_id')
  update(
    @Param('calendar_id') calendar_id: string,
    @Body() calendarConfigDetails: Partial<CalendarConfig>,
  ): Promise<CalendarConfig> {
    return this.calendarConfigService.update(
      calendar_id,
      calendarConfigDetails,
    );
  }

  @Delete(':calendar_id')
  remove(@Param('calendar_id') calendar_id: string): Promise<void> {
    return this.calendarConfigService.remove(calendar_id);
  }
}
