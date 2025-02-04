import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ClinicProcedureService } from './clinic-procedure.service';
import { ClinicProcedure } from './entities/clinic-procedure.entity';
import { AuthGuard } from '../guards/auth.guard';
import { ClinicDecorator } from '../decorators/clinic.decorator';

@Controller('clinic-procedure')
export class ClinicProcedureController {
  constructor(
    private readonly clinicProcedureService: ClinicProcedureService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @Body() patientDetails: ClinicProcedure,
    @ClinicDecorator('clinic_id') clinic_procedure_clinic_id: string,
  ): Promise<ClinicProcedure> {
    return this.clinicProcedureService.create(
      patientDetails,
      clinic_procedure_clinic_id,
    );
  }

  @Get(':clinic_procedure_id')
  findOne(
    @Param('clinic_procedure_id') clinic_procedure_id: string,
  ): Promise<ClinicProcedure> {
    return this.clinicProcedureService.findOne(clinic_procedure_id);
  }

  @Patch(':clinic_procedure_id')
  update(
    @Param('clinic_procedure_id') clinic_procedure_id: string,
    @Body() patientDetails: Partial<ClinicProcedure>,
  ): Promise<ClinicProcedure> {
    return this.clinicProcedureService.update(
      clinic_procedure_id,
      patientDetails,
    );
  }

  @Delete(':clinic_procedure_id')
  remove(
    @Param('clinic_procedure_id') clinic_procedure_id: string,
  ): Promise<void> {
    return this.clinicProcedureService.remove(clinic_procedure_id);
  }

  @Get('by-clinic/:ClinicId')
  findAllyClinicId(
    @Query('patient_clinic_id') ClinicId: string,
  ): Promise<ClinicProcedure[]> {
    return this.clinicProcedureService.findAllyClinicId(ClinicId);
  }
}
