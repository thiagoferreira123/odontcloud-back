/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CarePlanProcedure } from './entities/patient-care-plan-procedure..entity';

export const CarePlanProcedureProviders = [
  {
    provide: 'CarePlanProcedure',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CarePlanProcedure),
    inject: ['DATA_SOURCE'],
  },
];
