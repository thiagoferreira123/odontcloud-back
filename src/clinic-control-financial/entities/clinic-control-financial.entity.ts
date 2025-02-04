import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clinic_financial_control')
export class FinancialControl {
  @PrimaryGeneratedColumn('uuid')
  financial_control_id: string;

  @Column({ type: 'varchar', length: 255 })
  financial_control_description: string;

  @Column({ type: 'varchar', length: 255 })
  financial_control_clinic_id: string;

  @Column({ type: 'varchar', length: 255 })
  financial_control_value: string;

  @Column({ type: 'varchar', length: 255 })
  financial_control_entry_or_exit: string;

  @Column({ type: 'varchar', length: 255 })
  financial_control_date: string;

  @Column({ type: 'varchar', length: 255 })
  financial_control_category: string;

  @Column({ type: 'varchar', length: 255 })
  financial_control_payment_method: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  financial_control_observation: string;
}
