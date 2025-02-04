/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { PatientReceipt } from './entities/patient-receipt.entity';

export const PatientReceiptProviders = [
  {
    provide: 'PatientReceipt',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PatientReceipt),
    inject: ['DATA_SOURCE'],
  },
];
