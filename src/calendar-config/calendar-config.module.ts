import { Module, forwardRef } from '@nestjs/common';
import { CalendarConfigController } from './calendar-config.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CalendarConfigProviders } from './calendar-config.provider';
import { CalendarConfigService } from './calendar-config.service';
import { ClinicModule } from '../clinic/clinic.module';

@Module({
  imports: [forwardRef(() => ClinicModule), DatabaseModule],
  controllers: [CalendarConfigController],
  providers: [...CalendarConfigProviders, CalendarConfigService],
  exports: [CalendarConfigService],
})
export class CalendarConfigModule {}
