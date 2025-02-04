/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Clinic } from './entities/clinic.entity';

export const ClinicProviders = [
  {
    provide: 'Clinic',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Clinic),
    inject: ['DATA_SOURCE'],
  },
];
