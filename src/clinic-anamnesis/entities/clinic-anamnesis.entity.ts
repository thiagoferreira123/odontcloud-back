import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clinic_anamnesi')
export class ClinicAnamnesi {
  @PrimaryGeneratedColumn('uuid')
  clinic_anamnesi_id: string;

  @Column('text', { nullable: true })
  clinic_anamnesi_clinic_id?: string;

  @Column({ nullable: true })
  clinic_anamnesi_text?: string;

  @Column({ nullable: true })
  clinic_identification?: string;
}
