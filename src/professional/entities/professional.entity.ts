import { Calendar } from 'src/calendar/entities/calendar.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Professional {
  @PrimaryGeneratedColumn('uuid')
  professional_id: string;

  @Column()
  professional_clinic_id: string;

  @Column()
  professional_email: string;

  @Column()
  professional_full_name: string;

  @Column({ nullable: true })
  professional_phone: string;

  @Column()
  professional_cro_state: string;

  @Column()
  professional_cro_number: string;

  @Column()
  professional_photo_link: string;

  @Column()
  professional_specialty: string;

  @ManyToOne(() => Calendar, (calendar) => calendar.professionals)
  @JoinColumn({
    name: 'professional_id',
    referencedColumnName: 'calendar_professional_id',
  })
  calendar: Calendar;
}
