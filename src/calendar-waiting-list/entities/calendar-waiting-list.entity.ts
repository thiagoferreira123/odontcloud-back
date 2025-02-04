import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar_waiting_list')
export class CalendarWaitingList {
  @PrimaryGeneratedColumn('uuid')
  calendar_waiting_list_id: string;

  @Column({ length: 255 })
  calendar_waiting_list_clinic_id: string;

  @Column({ length: 255 })
  calendar_waiting_list_patient_name: string;

  @Column({ length: 255 })
  calendar_waiting_list_email: string;

  @Column({ length: 255 })
  calendar_waiting_list_contact: string;

  @Column({ length: 255 })
  calendar_waiting_list_health_insurance: string;

  @Column({ length: 255 })
  calendar_waiting_list_appointment_type: string;

  @Column({ length: 255 })
  calendar_waiting_list_observation: string;

  @Column({ length: 255 })
  calendar_waiting_list_scheduling_date: string;
}
