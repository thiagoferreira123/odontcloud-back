import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patient_anamnesis')
export class PatientAnamnesis {
  @PrimaryGeneratedColumn('uuid')
  anamnesis_id: string;

  @Column({ default: null })
  anamnesis_date_creation: string;

  @Column({ default: null })
  anamnesis_status: string;

  @Column({ default: null })
  anamnesis_identification: string;

  @Column({ type: 'text' })
  anamnesis_text: string;

  @Column()
  anamnesis_patient_id: string;
}
