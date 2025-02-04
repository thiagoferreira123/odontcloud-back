import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CarePlanService } from './patient-care-plan.service';
import { CarePlan } from './entities/patient-care-plan.entity';

@Controller('care-plan')
export class CarePlanController {
  constructor(private readonly careplanService: CarePlanService) {}

  @Post()
  create(@Body() care_planDetails: CarePlan): Promise<CarePlan> {
    return this.careplanService.create(care_planDetails);
  }

  @Get(':care_plan_id')
  findOne(@Param('care_plan_id') care_plan_id: string): Promise<CarePlan> {
    return this.careplanService.findOne(care_plan_id);
  }

  @Patch(':care_plan_id')
  update(
    @Param('care_plan_id') care_plan_id: string,
    @Body() care_planDetails: Partial<CarePlan>,
  ): Promise<CarePlan> {
    return this.careplanService.update(care_plan_id, care_planDetails);
  }

  @Delete(':care_plan_id')
  remove(@Param('care_plan_id') care_plan_id: string): Promise<void> {
    return this.careplanService.remove(care_plan_id);
  }

  @Get('by-patient/:patientId')
  findAllByPatientId(
    @Param('patientId') patientId: string,
  ): Promise<CarePlan[]> {
    return this.careplanService.findAllByPatientId(patientId);
  }
}
