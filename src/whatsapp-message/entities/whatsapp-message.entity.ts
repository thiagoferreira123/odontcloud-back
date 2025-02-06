import { Clinic } from 'src/clinic/entities/clinic.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('whatsapp_message')
export class WhatsappMessage {
  @PrimaryGeneratedColumn('uuid')
  whatsapp_message_id: string;

  @Column()
  whatsapp_message_clinic_id: string;

  @Column('text')
  whatsapp_message_happy_birthday: string;

  @Column('text')
  whatsapp_message_appointment_scheduling: string;

  @Column('text')
  whatsapp_message_welcome: string;

  @Column('text')
  whatsapp_message_appointment_cancellation: string;

  @Column('text')
  whatsapp_message_appointment_confirmation: string;

  @ManyToOne(() => Clinic, (clinic) => clinic.whatsappConfigurations)
  @JoinColumn({
    name: 'whatsapp_message_clinic_id',
    referencedColumnName: 'clinic_id',
  })
  clinic: Clinic;
}
