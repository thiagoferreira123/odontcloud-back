import { PartialType } from '@nestjs/mapped-types';
import { CreateCalendarConfigDto } from './create-calendar-config.dto';

export class UpdateCalendarConfigDto extends PartialType(CreateCalendarConfigDto) {}
