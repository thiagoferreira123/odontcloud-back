import { Module } from '@nestjs/common';
import { ClinicProsthesisSupplierService } from './clinic-prosthesis-supplier.service';
import { ClinicProsthesisSupplierController } from './clinic-prosthesis-supplier.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ClinicProsthesisSupplierProviders } from './clinic-prosthesis-supplier.provider';


@Module({
  imports: [DatabaseModule],
  controllers: [ClinicProsthesisSupplierController],
  providers: [... ClinicProsthesisSupplierProviders, ClinicProsthesisSupplierService],
  exports: [ClinicProsthesisSupplierService]
})
export class ClinicProsthesisSupplierModule {}  