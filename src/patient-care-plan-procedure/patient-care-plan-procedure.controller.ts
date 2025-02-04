import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CarePlanProcedureService } from './patient-care-plan-procedure..service';
import { CarePlanProcedure } from './entities/patient-care-plan-procedure..entity';

@Controller('procedure')
export class CarePlanProcedureController {
  constructor(private readonly procedureService: CarePlanProcedureService) {}

  @Post()
  create(
    @Body() procedureDetails: CarePlanProcedure,
  ): Promise<CarePlanProcedure> {
    return this.procedureService.create(procedureDetails);
  }

  @Get(':procedure_id')
  findOne(
    @Param('procedure_id') procedure_id: string,
  ): Promise<CarePlanProcedure> {
    return this.procedureService.findOne(procedure_id);
  }

  @Patch(':procedure_id')
  update(
    @Param('procedure_id') procedure_id: string,
    @Body() procedureDetails: Partial<CarePlanProcedure>,
  ): Promise<CarePlanProcedure> {
    return this.procedureService.update(procedure_id, procedureDetails);
  }

  @Delete(':procedure_id')
  remove(@Param('procedure_id') procedure_id: string): Promise<void> {
    return this.procedureService.remove(procedure_id);
  }
}
