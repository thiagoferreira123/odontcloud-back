import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClinicProcedure } from './entities/clinic-procedure.entity';

@Injectable()
export class ClinicProcedureService {
  constructor(
    @Inject('ClinicProcedure')
    private clinicProcedureRepository: Repository<ClinicProcedure>,
  ) {}

  async create(
    clinicProcedureDetails: ClinicProcedure,
    clinic_procedure_clinic_id: string,
  ): Promise<ClinicProcedure> {
    return this.clinicProcedureRepository.save({
      ...clinicProcedureDetails,
      clinic_procedure_clinic_id,
    });
  }

  async findOne(clinic_procedure_id: string): Promise<ClinicProcedure> {
    const clinicProcedure = await this.clinicProcedureRepository.findOne({
      where: { clinic_procedure_id },
    });
    if (!clinicProcedure) {
      throw new NotFoundException(
        `ClinicProcedure with ID "${clinic_procedure_id}" not found`,
      );
    }
    return clinicProcedure;
  }

  async update(
    clinic_procedure_id: string,
    clinicProcedureDetails: Partial<ClinicProcedure>,
  ): Promise<ClinicProcedure> {
    const clinicProcedure = await this.findOne(clinic_procedure_id);
    return this.clinicProcedureRepository.save({
      ...clinicProcedure,
      ...clinicProcedureDetails,
    });
  }

  async remove(clinic_procedure_id: string): Promise<void> {
    const result = await this.clinicProcedureRepository.delete(clinic_procedure_id);
    if (result.affected === 0) {
      throw new NotFoundException(`ClinicProcedure with ID ${clinic_procedure_id} not found`);
    }
  }

  async findAllyClinicId(ClinicId: string): Promise<ClinicProcedure[]> {
    return this.clinicProcedureRepository.find({
      where: { clinic_procedure_id: ClinicId },
    });
  }
}
