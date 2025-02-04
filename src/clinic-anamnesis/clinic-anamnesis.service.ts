import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClinicAnamnesi } from './entities/clinic-anamnesis.entity';

@Injectable()
export class ClinicAnamnesiService {
  constructor(
    @Inject('ClinicAnamnesi')
    private clinicAnamnesiRepository: Repository<ClinicAnamnesi>,
  ) {}

  async create(clinicAnamnesiDetails: ClinicAnamnesi): Promise<ClinicAnamnesi> {
    return this.clinicAnamnesiRepository.save(clinicAnamnesiDetails);
  }

  async findOne(clinic_anamnesi_id: string): Promise<ClinicAnamnesi> {
    const clinicAnamnesi = await this.clinicAnamnesiRepository.findOne({
      where: { clinic_anamnesi_id },
    });
    if (!clinicAnamnesi) {
      throw new NotFoundException(
        `ClinicAnamnesi with ID "${clinic_anamnesi_id}" not found`,
      );
    }
    return clinicAnamnesi;
  }

  async update(
    clinic_anamnesi_id: string,
    clinicAnamnesiDetails: Partial<ClinicAnamnesi>,
  ): Promise<ClinicAnamnesi> {
    const clinicAnamnesi = await this.findOne(clinic_anamnesi_id);
    return this.clinicAnamnesiRepository.save({
      ...clinicAnamnesi,
      ...clinicAnamnesiDetails,
    });
  }

  async remove(clinic_anamnesi_id: string): Promise<void> {
    const result = await this.clinicAnamnesiRepository.delete(clinic_anamnesi_id);
    if (result.affected === 0) {
      throw new NotFoundException(`ClinicAnamnesi with ID ${clinic_anamnesi_id} not found`);
    }
  }

  async findAllyClinicId(ClinicId: string): Promise<ClinicAnamnesi[]> {
    return this.clinicAnamnesiRepository.find({
      where: { clinic_anamnesi_clinic_id: ClinicId },
    });
  }

  async findAllShared(
    clinic_anamnesi_clinic_id: string,
  ): Promise<ClinicAnamnesi[]> {
    return this.clinicAnamnesiRepository.find({
      where: [
        { clinic_anamnesi_clinic_id },
        { clinic_anamnesi_clinic_id: 'admin' },
      ],
    });
  }
}
