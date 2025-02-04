import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CalendarWaitingListService } from './calendar-waiting-list.service';
import { AuthGuard } from '../guards/auth.guard';
import { ClinicDecorator } from '../decorators/clinic.decorator';
import { CalendarWaitingList } from './entities/calendar-waiting-list.entity';

@Controller('calendar-waiting-list')
export class CalendarWaitingListController {
  constructor(
    private readonly professionalService: CalendarWaitingListService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @Body() professionalDetails: CalendarWaitingList,
    @ClinicDecorator('clinic_id') calendar_waiting_list_clinic_id: string,
  ): Promise<CalendarWaitingList> {
    return this.professionalService.create(
      professionalDetails,
      calendar_waiting_list_clinic_id,
    );
  }

  @UseGuards(AuthGuard)
  @Get('by-clinic')
  findAllyClinicId(
    @ClinicDecorator('clinic_id')
    calendar_waiting_list_clinic_id: string,
  ): Promise<CalendarWaitingList[]> {
    return this.professionalService.findAllyClinicId(
      calendar_waiting_list_clinic_id,
    );
  }

  @Get(':calendar_waiting_list_id')
  findOne(
    @Param('calendar_waiting_list_id') calendar_waiting_list_id: string,
  ): Promise<CalendarWaitingList> {
    return this.professionalService.findOne(calendar_waiting_list_id);
  }

  @Patch(':calendar_waiting_list_id')
  update(
    @Param('calendar_waiting_list_id') calendar_waiting_list_id: string,
    @Body() professionalDetails: Partial<CalendarWaitingList>,
  ): Promise<CalendarWaitingList> {
    return this.professionalService.update(
      calendar_waiting_list_id,
      professionalDetails,
    );
  }

  @Delete(':calendar_waiting_list_id')
  remove(
    @Param('calendar_waiting_list_id') calendar_waiting_list_id: string,
  ): Promise<void> {
    return this.professionalService.remove(calendar_waiting_list_id);
  }
}
