import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Professional } from './entities/professional.entity';

@Injectable()
export class ProfessionalService {
  constructor(
    @Inject('Professional')
    private professionalRepository: Repository<Professional>,
  ) {}

  async create(
    professionalDetails: Professional,
    professional_clinic_id: string,
  ): Promise<Professional> {
    return this.professionalRepository.save({
      ...professionalDetails,
      professional_clinic_id,
    });
  }

  async findOne(
    professional_id: string,
    ignoreExceptions?: boolean,
  ): Promise<Professional> {
    const professional = await this.professionalRepository.findOne({
      where: { professional_id },
    });
    if (!professional && !ignoreExceptions) {
      throw new NotFoundException(
        `Professional with ID "${professional_id}" not found`,
      );
    }
    return professional;
  }

  async findAllyClinicId(
    professional_clinic_id: string,
  ): Promise<Professional[]> {
    return this.professionalRepository.find({
      where: { professional_clinic_id },
    });
  }

  async update(
    professional_id: string,
    professionalDetails: Partial<Professional>,
  ): Promise<Professional> {
    const professional = await this.findOne(professional_id);
    return this.professionalRepository.save({
      ...professional,
      ...professionalDetails,
    });
  }

  async remove(professional_id: string): Promise<void> {
    const result = await this.professionalRepository.delete(professional_id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Professional with ID ${professional_id} not found`,
      );
    }
  }
}
