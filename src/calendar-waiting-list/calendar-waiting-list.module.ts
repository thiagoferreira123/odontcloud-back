import { Module, forwardRef } from '@nestjs/common';
import { CalendarWaitingListService } from './calendar-waiting-list.service';
import { DatabaseModule } from 'src/database/database.module';
import { CalendarWaitingListProviders } from './calendar-waiting-list.provider';
import { ClinicModule } from '../clinic/clinic.module';
import { CalendarWaitingListController } from './calendar-waiting-list.controller';

@Module({
  imports: [forwardRef(() => ClinicModule), DatabaseModule],
  controllers: [CalendarWaitingListController],
  providers: [...CalendarWaitingListProviders, CalendarWaitingListService],
  exports: [CalendarWaitingListService],
})
export class CalendarWaitingListModule {}
