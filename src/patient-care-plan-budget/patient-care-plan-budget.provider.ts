/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CarePlanBudget } from './entities/patient-care-plan-budget.entity';

export const CarePlanBudgetProviders = [
  {
    provide: 'CarePlanBudget',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CarePlanBudget),
    inject: ['DATA_SOURCE'],
  },
];
