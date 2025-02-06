import { forwardRef, Module } from '@nestjs/common';
import { WhatsappMessageService } from './whatsapp-message.service';
import { WhatsappMessageController } from './whatsapp-message.controller';
import { DatabaseModule } from 'src/database/database.module';
import { WhatsappMessageProviders } from './whatsapp-message.providers';
import { ClinicModule } from 'src/clinic/clinic.module';
import { PatientModule } from 'src/patient/patient.module';
import { ClinicProviders } from 'src/clinic/clinic.provider';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => ClinicModule),
    forwardRef(() => PatientModule),
  ],
  controllers: [WhatsappMessageController],

  providers: [
    ...WhatsappMessageProviders,
    ...ClinicProviders,
    WhatsappMessageService,
  ],
  exports: [WhatsappMessageService],
})
export class WhatsappMessageModule {}
