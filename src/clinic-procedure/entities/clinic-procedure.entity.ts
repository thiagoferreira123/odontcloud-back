import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clinic_procedure')
export class ClinicProcedure {
  @PrimaryGeneratedColumn('uuid')
  clinic_procedure_id: string;

  @Column()
  clinic_procedure_clinic_id: string;

  @Column()
  clinic_procedure_description: string;

  @Column()
  clinic_procedure_value: string;
}
