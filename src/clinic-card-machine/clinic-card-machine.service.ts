import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardMachine } from './entities/clinic-card-machine.entity';

@Injectable()
export class CardMachineService {
  constructor(
    @Inject('CardMachine')
    private cardMachineRepository: Repository<CardMachine>,
  ) {}

  async create(patientDetails: CardMachine): Promise<CardMachine> {
    return this.cardMachineRepository.save(patientDetails);
  }

  async findOne(card_machine_id: string): Promise<CardMachine> {
    const patient = await this.cardMachineRepository.findOne({
      where: { card_machine_id }
    });
    if (!patient) {
      throw new NotFoundException(`CardMachine with ID "${card_machine_id}" not found`);
    }
    return patient;
  }

  async update(card_machine_id: string, patientDetails: Partial<CardMachine>): Promise<CardMachine> {
    const patient = await this.findOne(card_machine_id);
    return this.cardMachineRepository.save({ ...patient, ...patientDetails });
  }

  async remove(card_machine_id: string): Promise<void> {
    const patient = await this.findOne(card_machine_id);
    await this.cardMachineRepository.remove(patient);
  }

  async findAll(clinicId: string): Promise<CardMachine[]> {
    return this.cardMachineRepository.find({
      where: {
        card_machine_clinic_id: clinicId,
      },
    });
  }
}
