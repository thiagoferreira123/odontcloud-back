/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CalendarAlert } from './entities/calendar-alert.entity';

export const CalendarAlertProviders = [
  {
    provide: 'CalendarAlert',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CalendarAlert),
    inject: ['DATA_SOURCE'],
  },
];
