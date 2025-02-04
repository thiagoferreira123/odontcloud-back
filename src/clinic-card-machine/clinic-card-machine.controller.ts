import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CardMachineService } from './clinic-card-machine.service';
import { CardMachine } from './entities/clinic-card-machine.entity';

@Controller('card-machine')
export class CardMachineController {
  constructor(private readonly cardMachineService: CardMachineService) {}

  @Post()
  create(@Body() patientDetails: CardMachine): Promise<CardMachine> {
    return this.cardMachineService.create(patientDetails);
  }

  @Get(':card_machine_id')
  findOne(@Param('card_machine_id') card_machine_id: string): Promise<CardMachine> {
    return this.cardMachineService.findOne(card_machine_id);
  }

  @Patch(':card_machine_id')
  update(@Param('card_machine_id') card_machine_id: string, @Body() patientDetails: Partial<CardMachine>): Promise<CardMachine> {
    return this.cardMachineService.update(card_machine_id, patientDetails);
  }

  @Delete(':card_machine_id')
  remove(@Param('card_machine_id') card_machine_id: string): Promise<void> {
    return this.cardMachineService.remove(card_machine_id);
  }

  @Get('/clinic/:card_machine_clinic_id')
  findAll(@Param('card_machine_clinic_id') clinicId: string): Promise<CardMachine[]> {
    return this.cardMachineService.findAll(clinicId);
  }
}
