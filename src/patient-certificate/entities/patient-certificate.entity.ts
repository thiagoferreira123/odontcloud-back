import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patient_certificate')
export class PatientCertificate {
  @PrimaryGeneratedColumn('uuid')
  certificate_id: string;

  @Column()
  certificate_patient_id: string;

  @Column()
  certificate_patient_name: string;

  @Column()
  certificate_cpf_or_cnpj: string;

  @Column()
  certificate_permanence_start: string;

  @Column()
  certificate_permanence_end: string;

  @Column()
  certificate_date_emission: string;

  @Column()
  certificate_cep: string;

  @Column()
  certificate_state: string;

  @Column()
  certificate_city: string;

  @Column()
  certificate_neighborhood: string;

  @Column()
  certificate_street: string;

  @Column()
  certificate_number: string;
}
