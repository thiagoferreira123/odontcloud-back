import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ClinicProsthesis } from './entities/clinic-prosthesis.entity';
import { ClinicProsthesisService } from './clinic-prosthesis.service';

@Controller('clinic-prosthesis')
export class ClinicProsthesisController {
  constructor(private readonly prosthesisService: ClinicProsthesisService) {}

  @Post()
  create(@Body() prosthesisDetails: ClinicProsthesis): Promise<ClinicProsthesis> {
    return this.prosthesisService.create(prosthesisDetails);
  }

  @Get(':prosthesis_id')
  findOne(@Param('prosthesis_id') prosthesis_id: string): Promise<ClinicProsthesis> {
    return this.prosthesisService.findOne(prosthesis_id);
  }

  @Patch(':prosthesis_id')
  update(@Param('prosthesis_id') prosthesis_id: string, @Body() prosthesisDetails: Partial<ClinicProsthesis>): Promise<ClinicProsthesis> {
    return this.prosthesisService.update(prosthesis_id, prosthesisDetails);
  }

  @Delete(':prosthesis_id')
  remove(@Param('prosthesis_id') prosthesis_id: string): Promise<void> {
    return this.prosthesisService.remove(prosthesis_id);
  }

  @Get('by-clinic/:ClinicId')
  findAllbyClinicId(@Query('prosthesis_clinic_id') ClinicId: string): Promise<ClinicProsthesis[]> {
    return this.prosthesisService.findAllbyClinicId(ClinicId);
  }
}
