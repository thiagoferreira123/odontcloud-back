import { Module, forwardRef } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { ProfessionalController } from './professional.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ProfessionalProviders } from './professional.provider';
import { S3ProfessionalPhotoService } from './S3ProfessionalPhotoService';
import { ClinicModule } from '../clinic/clinic.module';

@Module({
  imports: [forwardRef(() => ClinicModule), DatabaseModule],
  controllers: [ProfessionalController],
  providers: [
    ...ProfessionalProviders,
    ProfessionalService,
    S3ProfessionalPhotoService,
  ],
  exports: [ProfessionalService],
})
export class ProfessionalModule {}
