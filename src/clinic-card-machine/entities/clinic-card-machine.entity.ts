import { Clinic } from 'src/clinic/entities/clinic.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('clinic_card_machine')
export class CardMachine {
  @PrimaryGeneratedColumn('uuid')
  card_machine_id: string;

  @Column({ type: 'varchar', length: 255 })
  card_machine_clinic_id: string;

  @Column({ type: 'varchar', length: 255 })
  card_machine_brand: string;

  @Column({ type: 'varchar', length: 255 })
  card_machine_surname: string;

  @Column({ type: 'varchar', length: 255 })
  card_machine_fee_per_pix_operation: string;

  @Column({ type: 'varchar', length: 255 })
  card_machine_fee_per_debit_transaction: string;

  @Column({ type: 'varchar', length: 255 })
  card_machine_fee_per_cash_credit_transaction: string;

  @Column({ type: 'varchar', length: 255 })
  card_machine_fee_per_credit_operation_2_to_6_times: string;

}
