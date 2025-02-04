import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PatientDocument } from './entities/patient-document.entity';

@Injectable()
export class PatientDocumentService {
  constructor(
    @Inject('PatientDocument')
    private documentsRepository: Repository<PatientDocument>,
  ) {}

  async create(patientDetails: PatientDocument): Promise<PatientDocument> {
    return this.documentsRepository.save(patientDetails);
  }

  async findOne(documents_id: string): Promise<PatientDocument> {
    const patient = await this.documentsRepository.findOne({
      where: { documents_id },
    });
    if (!patient) {
      throw new NotFoundException(
        `PatientDocument with ID "${documents_id}" not found`,
      );
    }
    return patient;
  }

  async update(
    documents_id: string,
    patientDetails: Partial<PatientDocument>,
  ): Promise<PatientDocument> {
    const patient = await this.findOne(documents_id);
    return this.documentsRepository.save({ ...patient, ...patientDetails });
  }

  async remove(documents_id: string): Promise<void> {
    const result = await this.documentsRepository.delete(documents_id);
    if (result.affected === 0) {
      throw new NotFoundException(`PatientDocument with ID ${documents_id} not found`);
    }
  }

  async findAllByPatient(PatientId: string): Promise<PatientDocument[]> {
    return this.documentsRepository.find({
      where: { documents_patient_id: PatientId },
    });
  }

  async createUpload(anexo: PatientDocument): Promise<PatientDocument> {
    return this.documentsRepository.save(anexo);
  }
}
