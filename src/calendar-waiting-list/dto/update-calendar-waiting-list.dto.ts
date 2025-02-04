import { PartialType } from '@nestjs/mapped-types';
import { CreateCalendarWaitingListDto } from './create-calendar-waiting-list.dto';

export class UpdateCalendarWaitingListDto extends PartialType(CreateCalendarWaitingListDto) {}
