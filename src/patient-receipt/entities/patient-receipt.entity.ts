import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patient_receipt')
export class PatientReceipt {
  @PrimaryGeneratedColumn('uuid')
  receipt_id: string;

  @Column()
  receipt_patient_id: string;

  @Column()
  receipt_patient_name: string;

  @Column()
  receipt_cpf_or_cnpj: string;

  @Column()
  receipt_receipt_value: string;

  @Column()
  receipt_value_in_extension: string;

  @Column()
  receipt_referent_a: string;

  @Column()
  receipt_issuer: string;

  @Column()
  receipt_date_emission: string;

  @Column()
  receipt_cep: string;

  @Column()
  receipt_state: string;

  @Column()
  receipt_city: string;

  @Column()
  receipt_neighborhood: string;

  @Column()
  receipt_street: string;

  @Column()
  receipt_number: string;
}
