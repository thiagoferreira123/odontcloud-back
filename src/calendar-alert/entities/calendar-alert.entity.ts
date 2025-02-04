import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Calendar } from '../../calendar/entities/calendar.entity';

@Entity('calendar_alert')
export class CalendarAlert {
  @PrimaryGeneratedColumn('uuid')
  alert_id: string;

  @Column()
  alert_clinic_name: string;

  @Column()
  alert_clinic_id: string;

  @Column()
  alert_name: string;

  @Column({ nullable: true })
  alert_phone?: string;

  @Column({ nullable: true })
  alert_email?: string;

  @Column()
  alert_date: string;

  @Column()
  alert_start_time: string;

  @Column()
  alert_end_time: string;

  @Column()
  alert_calendar_id: string;

  @Column({ default: 1 })
  alert_send_wpp: number;

  @Column({ default: 1 })
  alert_send_email: number;

  @ManyToOne(() => Calendar, (agenda) => agenda.alerts)
  @JoinColumn({ name: 'alert_calendar_id' })
  agenda: Calendar;
}
