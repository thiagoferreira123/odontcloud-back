/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { PatientDocument } from './entities/patient-document.entity';

export const PatientDocumentProviders = [
  {
    provide: 'PatientDocument',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PatientDocument),
    inject: ['DATA_SOURCE'],
  },
];
