import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarePlanTooth } from './entities/patient-care-plan-procedure-tooth.entity';

@Injectable()
export class CarePlanToothService {
  constructor(
    @Inject('CarePlanTooth')
    private toothRepository: Repository<CarePlanTooth>,
  ) {}

  async create(toothDetails: CarePlanTooth): Promise<CarePlanTooth> {
    return this.toothRepository.save(toothDetails);
  }

  async findOne(tooth_id: string): Promise<CarePlanTooth> {
    const tooth = await this.toothRepository.findOne({
      where: { tooth_id }
    });
    if (!tooth) {
      throw new NotFoundException(`CarePlanTooth with ID "${tooth_id}" not found`);
    }
    return tooth;
  }

  async update(tooth_id: string, toothDetails: Partial<CarePlanTooth>): Promise<CarePlanTooth> {
    const tooth = await this.findOne(tooth_id);
    return this.toothRepository.save({ ...tooth, ...toothDetails });
  }

  async remove(tooth_id: string): Promise<void> {
    const result = await this.toothRepository.delete(tooth_id);
    if (result.affected === 0) {
      throw new NotFoundException(`CarePlanTooth with ID ${tooth_id} not found`);
    }
  }
}
