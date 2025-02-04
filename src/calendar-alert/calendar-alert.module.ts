import { Module } from '@nestjs/common';
import { CalendarAlertService } from './calendar-alert.service';
import { CalendarAlertController } from './calendar-alert.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CalendarAlertProviders } from './calendar-alert.provider';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [DatabaseModule, EmailModule],
  controllers: [CalendarAlertController],
  providers: [...CalendarAlertProviders, CalendarAlertService],
  exports: [CalendarAlertService],
})
export class CalendarAlertModule {}
