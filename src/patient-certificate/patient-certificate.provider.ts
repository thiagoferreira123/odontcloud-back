/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { PatientCertificate } from './entities/patient-certificate.entity';

export const PatientCertificateProviders = [
  {
    provide: 'PatientCertificate',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PatientCertificate),
    inject: ['DATA_SOURCE'],
  },
];
