/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CarePlanTooth } from './entities/patient-care-plan-procedure-tooth.entity';

export const CarePlanToothProviders = [
  {
    provide: 'CarePlanTooth',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CarePlanTooth),
    inject: ['DATA_SOURCE'],
  },
];
