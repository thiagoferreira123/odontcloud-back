import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { FinancialControl } from './entities/clinic-control-financial.entity';
import { ClinicDecorator } from '../decorators/clinic.decorator';
import { AuthGuard } from '../guards/auth.guard';
import { FinancialControlService } from './clinic-control-financial.service';
import { Response } from 'express';

@UseGuards(AuthGuard)
@Controller('clinic-financial-control')
export class FinancialControlController {
  constructor(
    private readonly financialControlService: FinancialControlService,
  ) {}

  @Post()
  create(
    @Body() financialControlDetails: FinancialControl,
    @ClinicDecorator('clinic_id') financial_control_clinic_id: string,
  ): Promise<FinancialControl> {
    return this.financialControlService.create(
      financialControlDetails,
      financial_control_clinic_id,
    );
  }

  @Get('by-clinic')
  findAllyClinicId(
    @ClinicDecorator('clinic_id')
    financial_control_clinic_id: string,
  ): Promise<FinancialControl[]> {
    return this.financialControlService.findAllByClinicId(
      financial_control_clinic_id,
    );
  }

  @Get()
  findByClinicIdAndPeriod(
    @ClinicDecorator('clinic_id')
    financial_control_clinic_id: string,
    @Query('year') year: string,
    @Query('month') month: string,
  ) {
    return this.financialControlService.findByClinicIdAndPeriod(
      financial_control_clinic_id,
      year,
      month,
    );
  }

  @Get(':financial_control_id')
  findOne(
    @Param('financial_control_id') financial_control_id: string,
  ): Promise<FinancialControl> {
    return this.financialControlService.findOne(financial_control_id);
  }

  @Put(':financial_control_id')
  update(
    @Param('financial_control_id') financial_control_id: string,
    @Body() financialControlDetails: Partial<FinancialControl>,
  ): Promise<FinancialControl> {
    return this.financialControlService.update(
      financial_control_id,
      financialControlDetails,
    );
  }

  @Delete(':financial_control_id')
  remove(
    @Param('financial_control_id') financial_control_id: string,
  ): Promise<void> {
    return this.financialControlService.remove(financial_control_id);
  }

  @Get('/download/:year/:month')
  downloadSpreadsheetByclinicId(
    @ClinicDecorator('clinic_id')
    financial_control_clinic_id: string,
    @Param('year') year: string,
    @Param('month') month: string,
    @Res() res: Response,
  ) {
    return this.financialControlService.downloadSpreadsheetByclinicId(
      financial_control_clinic_id,
      year,
      month,
      res,
    );
  }
}
