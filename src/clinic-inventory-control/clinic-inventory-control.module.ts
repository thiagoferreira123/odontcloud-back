import { Module, forwardRef } from '@nestjs/common';
import { ClinicInventoryControlService } from './clinic-inventory-control.service';
import { ClinicInventoryControlController } from './clinic-inventory-control.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ClinicInventoryControlProviders } from './clinic-inventory-control.provider';
import { ClinicModule } from '../clinic/clinic.module';

@Module({
  imports: [forwardRef(() => ClinicModule), DatabaseModule],
  controllers: [ClinicInventoryControlController],
  providers: [...ClinicInventoryControlProviders, ClinicInventoryControlService],
  exports: [ClinicInventoryControlService],
})
export class ClinicInventoryControlModule {}
