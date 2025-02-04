import { Module, forwardRef } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CalendarProviders } from './calendar.provider';
import { ClinicModule } from '../clinic/clinic.module';
import { CalendarAlertModule } from '../calendar-alert/calendar-alert.module';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    forwardRef(() => ClinicModule),
    CalendarAlertModule,
    DatabaseModule,
    EmailModule,
  ],
  controllers: [CalendarController],
  providers: [...CalendarProviders, CalendarService],
  exports: [CalendarService],
})
export class CalendarModule {}
