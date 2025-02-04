/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CalendarConfig } from './entities/calendar-config.entity';

export const CalendarConfigProviders = [
  {
    provide: 'CalendarConfig',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CalendarConfig),
    inject: ['DATA_SOURCE'],
  },
];
