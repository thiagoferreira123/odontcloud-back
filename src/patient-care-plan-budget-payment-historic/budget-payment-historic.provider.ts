/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CarePlanBudgetPaymentHistoric } from './entities/budget-payment-historic.entity';

export const CarePlanBudgetPaymentHistoricProviders = [
  {
    provide: 'CarePlanBudgetPaymentHistoric',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CarePlanBudgetPaymentHistoric),
    inject: ['DATA_SOURCE'],
  },
];
