/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Professional } from './entities/professional.entity';

export const ProfessionalProviders = [
  {
    provide: 'Professional',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Professional),
    inject: ['DATA_SOURCE'],
  },
];
