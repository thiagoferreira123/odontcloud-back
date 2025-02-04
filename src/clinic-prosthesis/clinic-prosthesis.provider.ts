/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { ClinicProsthesis } from './entities/clinic-prosthesis.entity';

export const ClinicProsthesisProviders = [
  {
    provide: 'ClinicProsthesis',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ClinicProsthesis),
    inject: ['DATA_SOURCE'],
  },
];
