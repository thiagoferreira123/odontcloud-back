import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CarePlanBudget } from './entities/patient-care-plan-budget.entity';

@Injectable()
export class CarePlanBudgetService {
  constructor(
    @Inject('CarePlanBudget')
    private budgetRepository: Repository<CarePlanBudget>,
  ) {}

  async create(budgetDetails: CarePlanBudget): Promise<CarePlanBudget> {
    const uniqueBudgetNumber = Math.floor(10000000 + Math.random() * 90000000);
    budgetDetails.budget_number = uniqueBudgetNumber;
    return this.budgetRepository.save(budgetDetails);
  }

  async findOne(budget_id: string): Promise<CarePlanBudget> {
    const budget = await this.budgetRepository.findOne({
      where: { budget_id },
    });
    if (!budget) {
      throw new NotFoundException(
        `CarePlanBudget with ID "${budget_id}" not found`,
      );
    }
    return budget;
  }

  async findOneWithCarePlan(budget_id: string): Promise<CarePlanBudget> {
    const budget = await this.budgetRepository.findOne({
      where: { budget_id },
      relations: [
        'carePlan',
        'carePlan.procedures',
        'carePlan.procedures.teeth',
      ],
    });
    if (!budget) {
      throw new NotFoundException(
        `CarePlanBudget with ID "${budget_id}" not found`,
      );
    }
    return budget;
  }

  async update(
    budget_id: string,
    budgetDetails: Partial<CarePlanBudget>,
  ): Promise<CarePlanBudget> {
    const budget = await this.findOne(budget_id);
    return this.budgetRepository.save({ ...budget, ...budgetDetails });
  }

  async remove(budget_id: string): Promise<void> {
    const result = await this.budgetRepository.delete(budget_id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `CarePlanBudget with ID ${budget_id} not found`,
      );
    }
  }

  async findAllByPatient(
    budget_care_plan_patient_id: string,
  ): Promise<CarePlanBudget[]> {
    return this.budgetRepository.find({
      where: { budget_care_plan_patient_id },
    });
  }
}
