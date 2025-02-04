import { CarePlanProcedure } from 'src/patient-care-plan-procedure/entities/patient-care-plan-procedure..entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CarePlanBudget } from '../../patient-care-plan-budget/entities/patient-care-plan-budget.entity';
import { Patient } from '../../patient/entities/patient.entity';

@Entity('patient_care_plan')
export class CarePlan {
  @PrimaryGeneratedColumn('uuid')
  care_plan_id: string;

  @Column()
  care_plan_clinic_id: string;

  @Column()
  care_plan_patient_id: string;

  @Column()
  care_plan_date_creation: string;

  @Column()
  care_plan_identification: string;

  @OneToMany(
    () => CarePlanProcedure,
    (carePlanProcedure) => carePlanProcedure.carePlan,
    {
      cascade: true,
      eager: true,
    },
  )
  procedures: CarePlanProcedure[];

  @OneToMany(() => CarePlanBudget, (budget) => budget.carePlan, {
    cascade: false,
    eager: false,
  })
  budgets: CarePlanBudget[];

  @ManyToOne(() => Patient, (patient) => patient.carePlans)
  @JoinColumn({
    name: 'care_plan_patient_id',
    referencedColumnName: 'patient_id',
  })
  patient: Patient;
}
