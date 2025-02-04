import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ClinicProsthesisSupplierService } from './clinic-prosthesis-supplier.service';
import { ClinicProsthesisSupplier } from './entities/clinic-prosthesis-supplier.entity';

@Controller('clinic-prosthesis-supplier')
export class ClinicProsthesisSupplierController {
  constructor(private readonly patientService: ClinicProsthesisSupplierService) {}

  @Post()
  create(@Body() patientDetails: ClinicProsthesisSupplier): Promise<ClinicProsthesisSupplier> {
    return this.patientService.create(patientDetails);
  }

  @Get(':clinic_prosthesis_supplier_id')
  findOne(@Param('clinic_prosthesis_supplier_id') clinic_prosthesis_supplier_id: string): Promise<ClinicProsthesisSupplier> {
    return this.patientService.findOne(clinic_prosthesis_supplier_id);
  }

  @Patch(':clinic_prosthesis_supplier_id')
  update(@Param('clinic_prosthesis_supplier_id') clinic_prosthesis_supplier_id: string, @Body() patientDetails: Partial<ClinicProsthesisSupplier>): Promise<ClinicProsthesisSupplier> {
    return this.patientService.update(clinic_prosthesis_supplier_id, patientDetails);
  }

  @Delete(':clinic_prosthesis_supplier_id')
  remove(@Param('clinic_prosthesis_supplier_id') clinic_prosthesis_supplier_id: string): Promise<void> {
    return this.patientService.remove(clinic_prosthesis_supplier_id);
  }

  @Get('by-clinic/:ClinicId')
  findAllByClinicId(@Query('clinic_prosthesis_supplier_clinic_id') ClinicId: string): Promise<ClinicProsthesisSupplier[]> {
    return this.patientService.findAllByClinicId(ClinicId);
  }
}
