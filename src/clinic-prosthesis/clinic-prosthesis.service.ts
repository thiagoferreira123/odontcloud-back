import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClinicProsthesis } from './entities/clinic-prosthesis.entity';

@Injectable()
export class ClinicProsthesisService {
  constructor(
    @Inject('ClinicProsthesis')
    private prosthesisRepository: Repository<ClinicProsthesis>,
  ) {}

  async create(prosthesisDetails: ClinicProsthesis): Promise<ClinicProsthesis> {
    return this.prosthesisRepository.save(prosthesisDetails);
  }

  async findOne(prosthesis_id: string): Promise<ClinicProsthesis> {
    const prosthesis = await this.prosthesisRepository.findOne({
      where: { prosthesis_id }
    });
    if (!prosthesis) {
      throw new NotFoundException(`ClinicProsthesis with ID "${prosthesis_id}" not found`);
    }
    return prosthesis;
  }

  async update(prosthesis_id: string, prosthesisDetails: Partial<ClinicProsthesis>): Promise<ClinicProsthesis> {
    const prosthesis = await this.findOne(prosthesis_id);
    return this.prosthesisRepository.save({ ...prosthesis, ...prosthesisDetails });
  }

  async remove(prosthesis_id: string): Promise<void> {
    const prosthesis = await this.findOne(prosthesis_id);
    await this.prosthesisRepository.remove(prosthesis);
  }

  async findAllbyClinicId(ClinicId: string): Promise<ClinicProsthesis[]> {
    return this.prosthesisRepository.find({ where: { prosthesis_clinic_id: ClinicId } });
  }
}
