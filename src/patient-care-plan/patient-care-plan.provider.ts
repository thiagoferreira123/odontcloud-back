/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CarePlan } from './entities/patient-care-plan.entity';

export const CarePlanProviders = [
  {
    provide: 'CarePlan',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CarePlan),
    inject: ['DATA_SOURCE'],
  },
];
