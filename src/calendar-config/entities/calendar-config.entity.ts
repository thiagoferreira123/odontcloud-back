import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar_config')
export class CalendarConfig {
  @PrimaryGeneratedColumn('uuid')
  calendar_config_id: string;

  @Column({ type: 'varchar', length: 255 })
  calendar_config_clinic_id: string;

  @Column({ type: 'varchar', length: 255 })
  calendar_config_time_start: string;

  @Column({ type: 'varchar', length: 255 })
  calendar_config_time_end: string;

  @Column({ type: 'varchar', length: 255 })
  calendar_config_interval_start: string;

  @Column({ type: 'varchar', length: 255 })
  calendar_config_interval_end: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  calendar_config_service_days: string;
}
