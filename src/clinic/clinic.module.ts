import { forwardRef, Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ClinicProviders } from './clinic.provider';
import { JwtModule } from '@nestjs/jwt';
import { S3ClinicLogoService } from './S3ClinicLogoService';
import { S3ClinicSignatureServiceC } from './S3ClinicSignatureServiceC';
import { PatientModule } from 'src/patient/patient.module';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: String(process.env.JWT_SECRET),
    }),
    forwardRef(() => PatientModule),
  ],
  controllers: [ClinicController],
  providers: [
    ...ClinicProviders,
    ClinicService,
    S3ClinicLogoService,
    S3ClinicSignatureServiceC,
  ],
  exports: [ClinicService],
})
export class ClinicModule {}
