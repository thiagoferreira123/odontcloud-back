/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CalendarWaitingList } from './entities/calendar-waiting-list.entity';

export const CalendarWaitingListProviders = [
  {
    provide: 'CalendarWaitingList',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CalendarWaitingList),
    inject: ['DATA_SOURCE'],
  },
];
