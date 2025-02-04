import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarePlanToothService } from './patient-care-plan-procedure-tooth.service';
import { CarePlanTooth } from './entities/patient-care-plan-procedure-tooth.entity';

@Controller('tooth')
export class CarePlanToothController {
  constructor(private readonly toothService: CarePlanToothService) {}

  @Post()
  create(@Body() toothDetails: CarePlanTooth): Promise<CarePlanTooth> {
    return this.toothService.create(toothDetails);
  }

  @Get(':tooth_id')
  findOne(@Param('tooth_id') tooth_id: string): Promise<CarePlanTooth> {
    return this.toothService.findOne(tooth_id);
  }

  @Patch(':tooth_id')
  update(@Param('tooth_id') tooth_id: string, @Body() toothDetails: Partial<CarePlanTooth>): Promise<CarePlanTooth> {
    return this.toothService.update(tooth_id, toothDetails);
  }

  @Delete(':tooth_id')
  remove(@Param('tooth_id') tooth_id: string): Promise<void> {
    return this.toothService.remove(tooth_id);
  }
}
