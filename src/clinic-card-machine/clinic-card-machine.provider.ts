/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CardMachine } from './entities/clinic-card-machine.entity';

export const CardMachineProviders = [
  {
    provide: 'CardMachine',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CardMachine),
    inject: ['DATA_SOURCE'],
  },
];
