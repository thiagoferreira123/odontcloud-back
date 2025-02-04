import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clinic_prosthesis_supplier')
export class ClinicProsthesisSupplier {
  @PrimaryGeneratedColumn('uuid')
  clinic_prosthesis_supplier_id: string;

  @Column()
  clinic_prosthesis_supplier_clinic_id: string;

  @Column()
  clinic_prosthesis_supplier_name_fantasy: string;

  @Column()
  clinic_prosthesis_supplier_cpf_ou_cnpj: string;

  @Column()
  clinic_prosthesis_supplier_phone: string;

  @Column()
  clinic_prosthesis_supplier_address: string;

  @Column()
  clinic_prosthesis_supplier_personal_contact: string;

  @Column({ type: 'text' })
  clinic_prosthesis_supplier_observation: string;
}
