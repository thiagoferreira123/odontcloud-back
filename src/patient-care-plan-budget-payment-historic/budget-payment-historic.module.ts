import { Module } from '@nestjs/common';
import { CarePlanBudgetPaymentHistoricService } from './budget-payment-historic.service';
import { CarePlanBudgetPaymentHistoricController } from './budget-payment-historic.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CarePlanBudgetPaymentHistoricProviders } from './budget-payment-historic.provider';


@Module({
  imports: [DatabaseModule],
  controllers: [CarePlanBudgetPaymentHistoricController],
  providers: [... CarePlanBudgetPaymentHistoricProviders, CarePlanBudgetPaymentHistoricService],
  exports: [CarePlanBudgetPaymentHistoricService]
})
export class CarePlanBudgetPaymentHistoricModule {}  