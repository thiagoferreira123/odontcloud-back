/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Calendar } from './entities/calendar.entity';

export const CalendarProviders = [
  {
    provide: 'Calendar',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Calendar),
    inject: ['DATA_SOURCE'],
  },
];
