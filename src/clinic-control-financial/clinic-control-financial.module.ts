import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ClinicModule } from '../clinic/clinic.module';
import { FinancialControlController } from './clinic-control-financial.controller';
import { FinancialControlProviders } from './clinic-control-financial.provider';
import { FinancialControlService } from './clinic-control-financial.service';

@Module({
  imports: [forwardRef(() => ClinicModule), DatabaseModule],
  controllers: [FinancialControlController],
  providers: [...FinancialControlProviders, FinancialControlService],
  exports: [FinancialControlService],
})
export class ClinicFinancialControlModule {}
