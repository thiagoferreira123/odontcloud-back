import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CarePlan } from './entities/patient-care-plan.entity';

@Injectable()
export class CarePlanService {
  constructor(
    @Inject('CarePlan')
    private careplanRepository: Repository<CarePlan>,
  ) {}

  async create(care_planDetails: CarePlan): Promise<CarePlan> {
    return this.careplanRepository.save(care_planDetails);
  }

  async findOne(care_plan_id: string): Promise<CarePlan> {
    const care_plan = await this.careplanRepository.findOne({
      where: { care_plan_id },
    });
    if (!care_plan) {
      throw new NotFoundException(
        `CarePlan with ID "${care_plan_id}" not found`,
      );
    }
    return care_plan;
  }

  async update(
    care_plan_id: string,
    care_planDetails: Partial<CarePlan>,
  ): Promise<CarePlan> {
    const care_plan = await this.findOne(care_plan_id);
    return this.careplanRepository.save({ ...care_plan, ...care_planDetails });
  }

  async remove(care_plan_id: string): Promise<void> {
    const result = await this.careplanRepository.delete(care_plan_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Calendar with ID ${care_plan_id} not found`);
    }
  }

  async findAllByPatientId(patientId: string): Promise<CarePlan[]> {
    return this.careplanRepository.find({
      where: { care_plan_patient_id: patientId },
    });
  }
}
