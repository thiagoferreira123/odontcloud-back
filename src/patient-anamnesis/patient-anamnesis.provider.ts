/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { PatientAnamnesis } from './entities/patient-anamnesis.entity';

export const PatientAnamnesisProviders = [
  {
    provide: 'PatientAnamnesis',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PatientAnamnesis),
    inject: ['DATA_SOURCE'],
  },
];
