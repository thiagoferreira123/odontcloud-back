import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CalendarWaitingList } from './entities/calendar-waiting-list.entity';

@Injectable()
export class CalendarWaitingListService {
  constructor(
    @Inject('CalendarWaitingList')
    private professionalRepository: Repository<CalendarWaitingList>,
  ) {}

  async create(
    professionalDetails: CalendarWaitingList,
    calendar_waiting_list_clinic_id: string,
  ): Promise<CalendarWaitingList> {
    return this.professionalRepository.save({
      ...professionalDetails,
      calendar_waiting_list_clinic_id,
    });
  }

  async findOne(
    calendar_waiting_list_id: string,
  ): Promise<CalendarWaitingList> {
    const professional = await this.professionalRepository.findOne({
      where: { calendar_waiting_list_id },
    });
    if (!professional) {
      throw new NotFoundException(
        `CalendarWaitingList with ID "${calendar_waiting_list_id}" not found`,
      );
    }
    return professional;
  }

  async findAllyClinicId(
    calendar_waiting_list_clinic_id: string,
  ): Promise<CalendarWaitingList[]> {
    return this.professionalRepository.find({
      where: { calendar_waiting_list_clinic_id },
    });
  }

  async update(
    calendar_waiting_list_id: string,
    professionalDetails: Partial<CalendarWaitingList>,
  ): Promise<CalendarWaitingList> {
    const professional = await this.findOne(calendar_waiting_list_id);
    return this.professionalRepository.save({
      ...professional,
      ...professionalDetails,
    });
  }

  async remove(calendar_waiting_list_id: string): Promise<void> {
    const result = await this.professionalRepository.delete(
      calendar_waiting_list_id,
    );
    if (result.affected === 0) {
      throw new NotFoundException(
        `CalendarWaitingList with ID ${calendar_waiting_list_id} not found`,
      );
    }
  }
}
