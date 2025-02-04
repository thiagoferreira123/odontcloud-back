/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { ClinicInventoryControl } from './entities/clinic-inventory-control.entity';

export const ClinicInventoryControlProviders = [
  {
    provide: 'ClinicInventoryControl',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ClinicInventoryControl),
    inject: ['DATA_SOURCE'],
  },
];
