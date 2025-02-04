import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PatientCertificate } from './entities/patient-certificate.entity';

@Injectable()
export class PatientCertificateService {
  constructor(
    @Inject('PatientCertificate')
    private PatientCertificateRepository: Repository<PatientCertificate>,
  ) {}

  async create(
    patientDetails: PatientCertificate,
  ): Promise<PatientCertificate> {
    return this.PatientCertificateRepository.save(patientDetails);
  }

  async findOne(certificate_id: string): Promise<PatientCertificate> {
    const patient = await this.PatientCertificateRepository.findOne({
      where: { certificate_id },
    });
    if (!patient) {
      throw new NotFoundException(
        `PatientCertificate with ID "${certificate_id}" not found`,
      );
    }
    return patient;
  }

  async update(
    certificate_id: string,
    patientDetails: Partial<PatientCertificate>,
  ): Promise<PatientCertificate> {
    const patient = await this.findOne(certificate_id);
    return this.PatientCertificateRepository.save({
      ...patient,
      ...patientDetails,
    });
  }

  async remove(certificate_id: string): Promise<void> {
    const result = await this.PatientCertificateRepository.delete(certificate_id);
    if (result.affected === 0) {
      throw new NotFoundException(`PatientCertificate with ID ${certificate_id} not found`);
    }
  }

  async findAllByPatient(PatientId: string): Promise<PatientCertificate[]> {
    return this.PatientCertificateRepository.find({
      where: { certificate_patient_id: PatientId },
    });
  }
}
