import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PatientAnamnesis } from './entities/patient-anamnesis.entity';

@Injectable()
export class PatientAnamnesiservice {
  constructor(
    @Inject('PatientAnamnesis')
    private anamnesisRepository: Repository<PatientAnamnesis>,
  ) {}

  async create(patientDetails: PatientAnamnesis): Promise<PatientAnamnesis> {
    return this.anamnesisRepository.save(patientDetails);
  }

  async findOne(anamnesis_id: string): Promise<PatientAnamnesis> {
    const patient = await this.anamnesisRepository.findOne({
      where: { anamnesis_id },
    });
    if (!patient) {
      throw new NotFoundException(
        `PatientAnamnesis with ID "${anamnesis_id}" not found`,
      );
    }
    return patient;
  }

  async update(
    anamnesis_id: string,
    patientDetails: Partial<PatientAnamnesis>,
  ): Promise<PatientAnamnesis> {
    const patient = await this.findOne(anamnesis_id);
    return this.anamnesisRepository.save({ ...patient, ...patientDetails });
  }

  async remove(anamnesis_id: string): Promise<void> {
    const result = await this.anamnesisRepository.delete(anamnesis_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Calendar with ID ${anamnesis_id} not found`);
    }
  }

  async findAllByPatient(
    anamnesis_patient_id: string,
  ): Promise<PatientAnamnesis[]> {
    return this.anamnesisRepository.find({
      where: { anamnesis_patient_id },
    });
  }
}
