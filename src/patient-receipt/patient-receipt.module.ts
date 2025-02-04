import { Module } from '@nestjs/common';
import { PatientReceiptService } from './patient-receipt.service';
import { PatientReceiptController } from './patient-receipt.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PatientReceiptProviders } from './patient-receipt.provider';


@Module({
  imports: [DatabaseModule],
  controllers: [PatientReceiptController],
  providers: [... PatientReceiptProviders, PatientReceiptService],
  exports: [PatientReceiptService]
})
export class PatientReceiptModule {}  