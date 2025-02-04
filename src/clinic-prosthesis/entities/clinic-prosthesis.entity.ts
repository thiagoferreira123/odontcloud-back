import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clinic_prosthesis')
export class ClinicProsthesis {
  @PrimaryGeneratedColumn('uuid')
  prosthesis_id: string;

  @Column('varchar', { length: 255 })
  prosthesis_patient_id: string;

  @Column('varchar', { length: 255 })
  prosthesis_clinic_id: string;

  @Column('varchar', { length: 255 })
  prosthesis_professional_id: string;

  @Column('varchar', { length: 255 })
  prosthesis_procedure: string;

  @Column('varchar', { length: 255 })
  prosthesis_forcenedor: string;

  @Column('varchar', { length: 255 })
  prosthesis_request_date: string;

  @Column('varchar', { length: 255 })
  prosthesis_delivery_forecast: string;

  @Column('varchar', { length: 255 })
  prosthesis_delivery_date: string;

  @Column('varchar', { length: 255 })
  prosthesis_value: string;

  @Column('varchar', { length: 255 })
  prosthesis_quantity: string;

  @Column('varchar', { length: 255 })
  prosthesis_cor: string;

  @Column('varchar', { length: 255 })
  prosthesis_teeth: string;
}
