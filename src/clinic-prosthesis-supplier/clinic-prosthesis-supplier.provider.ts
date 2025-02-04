/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { ClinicProsthesisSupplier } from './entities/clinic-prosthesis-supplier.entity';

export const ClinicProsthesisSupplierProviders = [
  {
    provide: 'ClinicProsthesisSupplier',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ClinicProsthesisSupplier),
    inject: ['DATA_SOURCE'],
  },
];
