/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { ClinicAnamnesi } from './entities/clinic-anamnesis.entity';

export const ClinicAnamnesiProviders = [
  {
    provide: 'ClinicAnamnesi',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ClinicAnamnesi),
    inject: ['DATA_SOURCE'],
  },
];
