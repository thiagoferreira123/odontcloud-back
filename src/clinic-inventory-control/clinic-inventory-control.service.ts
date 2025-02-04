import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClinicInventoryControl } from './entities/clinic-inventory-control.entity';

@Injectable()
export class ClinicInventoryControlService {
  constructor(
    @Inject('ClinicInventoryControl')
    private clinicInventoryControlRepository: Repository<ClinicInventoryControl>,
  ) {}

  async create(
    clinicInventoryControlDetails: ClinicInventoryControl,
    clinic_procedure_clinic_id: string,
  ): Promise<ClinicInventoryControl> {
    return this.clinicInventoryControlRepository.save({
      ...clinicInventoryControlDetails,
      clinic_procedure_clinic_id,
    });
  }

  async findOne(inventory_control_product_id: string): Promise<ClinicInventoryControl> {
    const clinicInventoryControl = await this.clinicInventoryControlRepository.findOne({
      where: { inventory_control_product_id },
    });
    if (!clinicInventoryControl) {
      throw new NotFoundException(
        `ClinicInventoryControl with ID "${inventory_control_product_id}" not found`,
      );
    }
    return clinicInventoryControl;
  }

  async update(
    inventory_control_product_id: string,
    clinicInventoryControlDetails: Partial<ClinicInventoryControl>,
  ): Promise<ClinicInventoryControl> {
    const clinicInventoryControl = await this.findOne(inventory_control_product_id);
    return this.clinicInventoryControlRepository.save({
      ...clinicInventoryControl,
      ...clinicInventoryControlDetails,
    });
  }

  async remove(inventory_control_product_id: string): Promise<void> {
    const result = await this.clinicInventoryControlRepository.delete(inventory_control_product_id);
    if (result.affected === 0) {
      throw new NotFoundException(`ClinicInventoryControl with ID ${inventory_control_product_id} not found`);
    }
  }

  async findAllByClinicId(ClinicId: string): Promise<ClinicInventoryControl[]> {
    return this.clinicInventoryControlRepository.find({
      where: { inventory_control_product_clinic_id: ClinicId },
    });
  }
}
