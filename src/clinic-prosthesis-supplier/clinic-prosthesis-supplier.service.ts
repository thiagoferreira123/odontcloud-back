import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClinicProsthesisSupplier } from './entities/clinic-prosthesis-supplier.entity';

@Injectable()
export class ClinicProsthesisSupplierService {
  constructor(
    @Inject('ClinicProsthesisSupplier')
    private patientRepository: Repository<ClinicProsthesisSupplier>,
  ) {}

  async create(patientDetails: ClinicProsthesisSupplier): Promise<ClinicProsthesisSupplier> {
    return this.patientRepository.save(patientDetails);
  }

  async findOne(clinic_prosthesis_supplier_id: string): Promise<ClinicProsthesisSupplier> {
    const patient = await this.patientRepository.findOne({
      where: { clinic_prosthesis_supplier_id }
    });
    if (!patient) {
      throw new NotFoundException(`ClinicProsthesisSupplier with ID "${clinic_prosthesis_supplier_id}" not found`);
    }
    return patient;
  }

  async update(clinic_prosthesis_supplier_id: string, patientDetails: Partial<ClinicProsthesisSupplier>): Promise<ClinicProsthesisSupplier> {
    const patient = await this.findOne(clinic_prosthesis_supplier_id);
    return this.patientRepository.save({ ...patient, ...patientDetails });
  }

  async remove(clinic_prosthesis_supplier_id: string): Promise<void> {
    const patient = await this.findOne(clinic_prosthesis_supplier_id);
    await this.patientRepository.remove(patient);
  }

  async findAllByClinicId(ClinicId: string): Promise<ClinicProsthesisSupplier[]> {
    return this.patientRepository.find({ where: { clinic_prosthesis_supplier_clinic_id: ClinicId } });
  }
}
