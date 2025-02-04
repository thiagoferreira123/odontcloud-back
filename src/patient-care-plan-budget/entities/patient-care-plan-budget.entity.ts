import { CarePlanBudgetPaymentHistoric } from 'src/patient-care-plan-budget-payment-historic/entities/budget-payment-historic.entity';
import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CarePlan } from '../../patient-care-plan/entities/patient-care-plan.entity';

@Entity('patient_care_plan_budget')
export class CarePlanBudget {
  @PrimaryGeneratedColumn('uuid')
  budget_id: string;

  @Column({ nullable: true })
  budget_care_plan_id: string;

  @Column({ nullable: true })
  budget_care_plan_professional_id: string;

  @Column({ nullable: true })
  budget_care_plan_patient_id: string;

  @Column({ nullable: true })
  budget_clinic_id: string;

  @Column({ nullable: true })
  budget_name: string;

  @Column()
  budget_date_creation: string;

  @Column({ nullable: true })
  budget_value: string;

  @Column({ nullable: true })
  budget_payment_method: string;

  @Column({ nullable: true })
  budget_discount_type: string;

  @Column({ nullable: true })
  budget_discount_value: string;

  @Column({ nullable: true })
  budget_number_installments: string;

  @Column({ nullable: true })
  budget_due_first_installment: string;

  @Column({ nullable: true })
  budget_entry_payment: string;

  @Column({ nullable: true })
  budget_pay_day: string;

  @Column({ nullable: true })
  budget_observations: string;

  @Column({ nullable: true })
  budget_number: number;

  @OneToMany(
    () => CarePlanBudgetPaymentHistoric,
    (paymentHistoric) => paymentHistoric.budget,
    {
      cascade: true,
      eager: true,
    },
  )
  paymentHistorics: CarePlanBudgetPaymentHistoric[];

  @ManyToOne(() => CarePlan, (care_plan) => care_plan.budgets)
  @JoinColumn({
    name: 'budget_care_plan_id',
    referencedColumnName: 'care_plan_id',
  })
  carePlan: CarePlan;
}
