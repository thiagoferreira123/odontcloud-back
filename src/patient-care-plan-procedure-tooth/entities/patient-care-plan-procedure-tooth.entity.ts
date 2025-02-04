import { CarePlanProcedure } from 'src/patient-care-plan-procedure/entities/patient-care-plan-procedure..entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('patient_care_plan_procedure_tooth')
export class CarePlanTooth {
  @PrimaryGeneratedColumn('uuid')
  tooth_id: string;

  @Column()
  tooth_procedure_id: string;

  @Column()
  tooth_number: string;

  @Column()
  tooth_quadrant: string;

  @Column()
  tooth_faces: string;

  @ManyToOne(() => CarePlanProcedure, (procedure) => procedure.teeth)
  @JoinColumn({ name: 'tooth_procedure_id' })
  procedure: CarePlanProcedure;
}
