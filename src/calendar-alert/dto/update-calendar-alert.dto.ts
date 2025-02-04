import { PartialType } from '@nestjs/mapped-types';
import { CreateCalendarAlertDTO } from './create-calendar-alert.dto';

export class UpdateCalendarAlertDto extends PartialType(CreateCalendarAlertDTO) {}
