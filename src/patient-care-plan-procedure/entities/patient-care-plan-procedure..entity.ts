import { CarePlanTooth } from 'src/patient-care-plan-procedure-tooth/entities/patient-care-plan-procedure-tooth.entity';
import { CarePlan } from 'src/patient-care-plan/entities/patient-care-plan.entity';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('patient_care_plan_procedure')
export class CarePlanProcedure {
  @PrimaryGeneratedColumn('uuid')
  procedure_id: string;

  @Column({ nullable: true })
  procedure_name: string;

  @Column({ nullable: true })
  procedure_care_plan_id: string;

  @Column({ nullable: true })
  procedure_professional_id: string;

  @Column({ nullable: true })
  procedure_value: string;

  @Column({ nullable: true })
  procedure_deciduous_or_permanent: string;

  @Column({ nullable: true })
  procedure_observations: string;

  @Column({ nullable: true })
  procedure_status: string;

  @ManyToOne(() => CarePlan, (carePlan) => carePlan.procedures)
  @JoinColumn({ name: 'procedure_care_plan_id' })
  carePlan: CarePlan;

  @OneToMany(() => CarePlanTooth, (tooth) => tooth.procedure, {
    cascade: true,
    eager: true,
  })
  teeth: CarePlanTooth[];
}
