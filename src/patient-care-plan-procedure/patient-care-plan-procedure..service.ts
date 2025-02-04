import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CarePlanProcedure } from './entities/patient-care-plan-procedure..entity';

@Injectable()
export class CarePlanProcedureService {
  constructor(
    @Inject('CarePlanProcedure')
    private procedureRepository: Repository<CarePlanProcedure>,
  ) {}

  async create(
    procedureDetails: CarePlanProcedure,
  ): Promise<CarePlanProcedure> {
    const procedure = this.procedureRepository.create(procedureDetails);
    return this.procedureRepository.save(procedure);
  }

  async findOne(procedure_id: string): Promise<CarePlanProcedure> {
    const procedure = await this.procedureRepository.findOne({
      where: { procedure_id },
    });
    if (!procedure) {
      throw new NotFoundException(
        `CarePlanProcedure with ID "${procedure_id}" not found`,
      );
    }
    return procedure;
  }

  async update(
    procedure_id: string,
    procedureDetails: Partial<CarePlanProcedure>,
  ): Promise<CarePlanProcedure> {
    const procedure = await this.findOne(procedure_id);
    return this.procedureRepository.save({ ...procedure, ...procedureDetails });
  }

  async remove(procedure_id: string): Promise<void> {
    const result = await this.procedureRepository.delete(procedure_id);
    if (result.affected === 0) {
      throw new NotFoundException(`CarePlanProcedure with ID ${procedure_id} not found`);
    }
  }
}
