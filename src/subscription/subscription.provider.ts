/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Subscription } from './entities/subscription.entity';

export const SubscriptionProviders = [
  {
    provide: 'Subscription',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Subscription),
    inject: ['DATA_SOURCE'],
  },
];
