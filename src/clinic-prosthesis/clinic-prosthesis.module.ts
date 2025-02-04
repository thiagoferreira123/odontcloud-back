import { Module } from '@nestjs/common';
import { ClinicProsthesisService } from './clinic-prosthesis.service';
import { DatabaseModule } from 'src/database/database.module';
import { ClinicProsthesisProviders } from './clinic-prosthesis.provider';
import { ClinicProsthesisController } from './clinic-prosthesis.controller';


@Module({
  imports: [DatabaseModule],
  controllers: [ClinicProsthesisController],
  providers: [... ClinicProsthesisProviders, ClinicProsthesisService],
  exports: [ClinicProsthesisService]
})
export class ClinicProsthesisModule {}  