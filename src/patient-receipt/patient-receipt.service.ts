import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PatientReceipt } from './entities/patient-receipt.entity';

@Injectable()
export class PatientReceiptService {
  constructor(
    @Inject('PatientReceipt')
    private receiptRepository: Repository<PatientReceipt>,
  ) {}

  async create(patientDetails: PatientReceipt): Promise<PatientReceipt> {
    return this.receiptRepository.save(patientDetails);
  }

  async findOne(receipt_id: string): Promise<PatientReceipt> {
    const patient = await this.receiptRepository.findOne({
      where: { receipt_id },
    });
    if (!patient) {
      throw new NotFoundException(
        `PatientReceipt with ID "${receipt_id}" not found`,
      );
    }
    return patient;
  }

  async update(
    receipt_id: string,
    patientDetails: Partial<PatientReceipt>,
  ): Promise<PatientReceipt> {
    const patient = await this.findOne(receipt_id);
    return this.receiptRepository.save({ ...patient, ...patientDetails });
  }

  async remove(receipt_id: string): Promise<void> {
    const result = await this.receiptRepository.delete(receipt_id);
    if (result.affected === 0) {
      throw new NotFoundException(`PatientReceipt with ID ${receipt_id} not found`);
    }
  }

  async findAllByPatientId(
    receipt_patient_id: string,
  ): Promise<PatientReceipt[]> {
    return this.receiptRepository.find({
      where: { receipt_patient_id },
    });
  }
}
