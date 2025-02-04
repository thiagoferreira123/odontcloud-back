import { CarePlanBudget } from 'src/patient-care-plan-budget/entities/patient-care-plan-budget.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('patient_care_plan_budget_payment_historic')
export class CarePlanBudgetPaymentHistoric {
  @PrimaryGeneratedColumn('uuid')
  payment_id: string;

  @Column({ type: 'varchar', length: 255 })
  payment_budget_id: string;

  @Column({ type: 'date' })
  payment_due_date: Date;

  @Column({ type: 'int' })
  payment_installments_number: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  payment_installments_value: number;

  @Column({ type: 'date', nullable: true })
  payment_installments_value_date_received: Date | null;

  @Column({ type: 'varchar', length: 50 })
  payment_status: string;

  @Column({ type: 'varchar', length: 10 })
  payment_description: string;

  @ManyToOne(() => CarePlanBudget, (budget) => budget.paymentHistorics)
  @JoinColumn({ name: 'payment_budget_id', referencedColumnName: 'budget_id' })
  budget: CarePlanBudget;
}
