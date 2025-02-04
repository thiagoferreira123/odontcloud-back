import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CalendarConfig } from './entities/calendar-config.entity';

@Injectable()
export class CalendarConfigService {
  constructor(
    @Inject('CalendarConfig')
    private calendarConfigRepository: Repository<CalendarConfig>,
  ) {}

  async create(
    calendarConfigDetails: CalendarConfig,
    calendar_config_clinic_id: string,
  ): Promise<CalendarConfig> {
    return this.calendarConfigRepository.save({
      ...calendarConfigDetails,
      calendar_config_clinic_id,
    });
  }

  async findOne(calendar_config_id: string): Promise<CalendarConfig> {
    const calendar = await this.calendarConfigRepository.findOne({
      where: { calendar_config_id },
    });
    if (!calendar) {
      throw new NotFoundException(
        `CalendarConfig with ID "${calendar_config_id}" not found`,
      );
    }
    return calendar;
  }

  async findOneByClinic(
    calendar_config_clinic_id: string,
  ): Promise<CalendarConfig> {
    const calendar = await this.calendarConfigRepository.findOne({
      where: { calendar_config_clinic_id },
    });
    if (!calendar) {
      throw new NotFoundException(
        `CalendarConfig with ID "${calendar_config_clinic_id}" not found`,
      );
    }
    return calendar;
  }

  async update(
    calendar_config_id: string,
    calendarConfigDetails: Partial<CalendarConfig>,
  ): Promise<CalendarConfig> {
    const calendar = await this.findOne(calendar_config_id);
    return this.calendarConfigRepository.save({
      ...calendar,
      ...calendarConfigDetails,
    });
  }

  async remove(calendar_config_id: string): Promise<void> {
    const result =
      await this.calendarConfigRepository.delete(calendar_config_id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `CalendarConfig with ID ${calendar_config_id} not found`,
      );
    }
  }
}
