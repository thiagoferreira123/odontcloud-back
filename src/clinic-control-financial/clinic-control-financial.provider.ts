/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { FinancialControl } from './entities/clinic-control-financial.entity';

export const FinancialControlProviders = [
  {
    provide: 'FinancialControl',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(FinancialControl),
    inject: ['DATA_SOURCE'],
  },
];
