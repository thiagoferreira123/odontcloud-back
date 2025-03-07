import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { ulid } from 'ulid';
import { Subscription } from '../../subscription/entities/subscription.entity';
import { WhatsappMessage } from 'src/whatsapp-message/entities/whatsapp-message.entity';
import { Patient } from 'src/patient/entities/patient.entity';

@Entity('clinic')
export class Clinic {
  @PrimaryColumn()
  clinic_id: string;

  @BeforeInsert()
  generateUlid() {
    if (!this.clinic_id) {
      this.clinic_id = ulid();
    }
  }

  @Column({ unique: true })
  clinic_email: string;

  @Column()
  clinic_password: string;

  @Column()
  clinic_full_name: string;

  @Column({ nullable: true })
  clinic_phone: string;

  @Column({ nullable: true })
  clinic_logo_link: string;

  @Column({ nullable: true })
  clinic_signature_link: string;

  @Exclude()
  @Column({ nullable: true })
  clinic_reset_password_token?: string;

  @Column({ nullable: true })
  @Exclude()
  clinic_reset_password_token_expires?: Date;

  @Column({ nullable: true })
  clinic_cnpj_or_cpf?: string;

  @Column({ nullable: true })
  clinic_zipcode?: string;

  @Column({ nullable: true })
  clinic_state?: string;

  @Column({ nullable: true })
  clinic_city?: string;

  @Column({ nullable: true })
  clinic_neighborhood?: string;

  @Column({ nullable: true })
  clinic_street?: string;

  @Column({ nullable: true })
  clinic_number?: string;

  @Column({ nullable: true })
  clinic_stripe_customer_id?: string;

  @Column({ nullable: true })
  clinic_primary_color?: string;

  @OneToOne(() => Subscription, (subscription) => subscription.clinic, {
    eager: true,
  })
  subscription: Subscription;

  @OneToMany(
    () => WhatsappMessage,
    (whatsappConfiguration) => whatsappConfiguration.clinic,
    { eager: false },
  )
  whatsappConfigurations: WhatsappMessage[];

  @OneToMany(() => Patient, (patient) => patient.clinic, { eager: false })
  patients: Patient[];
}
