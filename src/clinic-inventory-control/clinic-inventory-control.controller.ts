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
import { ClinicInventoryControlService } from './clinic-inventory-control.service';
import { ClinicInventoryControl } from './entities/clinic-inventory-control.entity';
import { AuthGuard } from '../guards/auth.guard';
import { ClinicDecorator } from '../decorators/clinic.decorator';

@Controller('clinic-inventory-control')
export class ClinicInventoryControlController {
  constructor(
    private readonly clinicInventoryControlService: ClinicInventoryControlService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @Body() patientDetails: ClinicInventoryControl,
    @ClinicDecorator('clinic_id') clinic_procedure_clinic_id: string,
  ): Promise<ClinicInventoryControl> {
    return this.clinicInventoryControlService.create(
      patientDetails,
      clinic_procedure_clinic_id,
    );
  }

  @Get(':inventory_control_product_id')
  findOne(
    @Param('inventory_control_product_id') inventory_control_product_id: string,
  ): Promise<ClinicInventoryControl> {
    return this.clinicInventoryControlService.findOne(inventory_control_product_id);
  }

  @Patch(':inventory_control_product_id')
  update(
    @Param('inventory_control_product_id') inventory_control_product_id: string,
    @Body() patientDetails: Partial<ClinicInventoryControl>,
  ): Promise<ClinicInventoryControl> {
    return this.clinicInventoryControlService.update(
      inventory_control_product_id,
      patientDetails,
    );
  }

  @Delete(':inventory_control_product_id')
  remove(
    @Param('inventory_control_product_id') inventory_control_product_id: string,
  ): Promise<void> {
    return this.clinicInventoryControlService.remove(inventory_control_product_id);
  }

  @Get('by-clinic/:ClinicId')
  findAllByClinicId(
    @Query('inventory_control_product_clinic_id') ClinicId: string,
  ): Promise<ClinicInventoryControl[]> {
    return this.clinicInventoryControlService.findAllByClinicId(ClinicId);
  }
}
