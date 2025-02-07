import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CarePlan } from '../../patient-care-plan/entities/patient-care-plan.entity';
import { Clinic } from 'src/clinic/entities/clinic.entity';

@Entity('patient')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  patient_id: string;

  @Column()
  patient_clinic_id: string;

  @Column()
  patient_last_interaction: string;

  @Column()
  patient_full_name: string;

  @Column({ nullable: true })
  patient_photo?: string;

  @Column()
  patient_birth_date: string;

  @Column()
  patient_cpf: string;

  @Column({ nullable: true })
  patient_rg?: string;

  @Column({ nullable: true })
  patient_rg_issuer?: string;

  @Column()
  patient_sex: number;

  @Column()
  patient_marital_status: string;

  @Column({ nullable: true })
  patient_health_insurance?: string;

  @Column({ nullable: true })
  patient_health_insurance_number?: string;

  @Column({ nullable: true })
  patient_medical_record_number?: string;

  @Column('text', { nullable: true })
  patient_reference?: string;

  @Column({ nullable: true })
  patient_phone?: string;

  @Column({ nullable: true })
  patient_email?: string;

  @Column({ nullable: true })
  patient_extra_contact_full_name?: string;

  @Column({ nullable: true })
  patient_extra_contact_cpf?: string;

  @Column({ nullable: true })
  patient_extra_contact_phone?: string;

  @Column()
  patient_extra_contact_relationship: string;

  @Column({ nullable: true })
  patient_zip_code?: string;

  @Column({ nullable: true })
  patient_number?: string;

  @Column({ nullable: true })
  patient_street?: string;

  @Column('text', { nullable: true })
  patient_complement?: string;

  @Column({ nullable: true })
  patient_neighborhood?: string;

  @Column({ nullable: true })
  patient_city?: string;

  @Column({ nullable: true })
  patient_state?: string;

  @Column({ nullable: true })
  patient_register_date?: string;

  @Column({ nullable: true, type: 'text' })
  patient_observation?: string;

  @OneToMany(() => CarePlan, (carePlan) => carePlan.patient, {
    cascade: false,
    eager: false,
  })
  carePlans: CarePlan[];

  @ManyToOne(() => Clinic, (clinic) => clinic.patients)
  @JoinColumn({ name: 'patient_clinic_id' })
  clinic: Clinic;
}
