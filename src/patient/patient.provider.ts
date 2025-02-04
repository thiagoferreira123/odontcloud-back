/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Patient } from './entities/patient.entity';

export const PatientProviders = [
  {
    provide: 'Patient',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Patient),
    inject: ['DATA_SOURCE'],
  },
];
