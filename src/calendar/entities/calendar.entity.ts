import { Professional } from 'src/professional/entities/professional.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CalendarAlert } from '../../calendar-alert/entities/calendar-alert.entity';

@Entity('calendar')
export class Calendar {
  @PrimaryGeneratedColumn('uuid')
  calendar_id: string;

  @Column()
  calendar_clinic_id: string;

  @Column()
  calendar_professional_id: string;

  @Column({ nullable: true })
  calendar_patient_id?: string;

  @Column()
  calendar_name: string;

  @Column({ nullable: true })
  calendar_phone?: string;

  @Column({ nullable: true })
  calendar_email?: string;

  @Column({ nullable: true })
  calendar_agreement?: string;

  @Column({ nullable: true })
  calendar_date?: string;

  @Column()
  calendar_start_time: string;

  @Column()
  calendar_end_time: string;

  @Column()
  calendar_type: string;

  @Column()
  calendar_medical_insurance: string;
  @Column({
    type: 'enum',
    enum: [
      'SCHEDULED',
      'PENDING',
      'CONFIRMED',
      'CANCELLED',
      'REALIZED',
      'NO_SHOW',
    ],
    default: null,
  })
  calendar_status?: string;

  @Column({ nullable: true })
  calendar_recurrence?: string;

  @Column({ nullable: true })
  calendar_recurrence_type?: string;

  @Column({ nullable: true })
  calendar_recurrence_quantity?: string;

  @Column({ nullable: true })
  calendar_recurrency_type_qnt?: string;

  @Column({ nullable: true })
  calendar_recurrence_date_end?: string;

  @Column({ nullable: true })
  calendar_observation?: string;

  @OneToMany(() => Professional, (professional) => professional.calendar, {
    eager: true,
    cascade: false,
  })
  professionals: Professional[];

  @OneToMany(() => CalendarAlert, (alerta) => alerta.agenda, {
    eager: false,
    cascade: false,
  })
  alerts: CalendarAlert[];
}
