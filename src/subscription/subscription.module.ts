import { Module, forwardRef } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { DatabaseModule } from 'src/database/database.module';
import { SubscriptionProviders } from './subscription.provider';
import { ClinicModule } from '../clinic/clinic.module';

@Module({
  imports: [forwardRef(() => ClinicModule), DatabaseModule],
  controllers: [SubscriptionController],
  providers: [...SubscriptionProviders, SubscriptionService],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
