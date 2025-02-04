/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { ClinicProcedure } from './entities/clinic-procedure.entity';

export const ClinicProcedureProviders = [
  {
    provide: 'ClinicProcedure',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ClinicProcedure),
    inject: ['DATA_SOURCE'],
  },
];
