import { Exclude } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Subscription } from '../../subscription/entities/subscription.entity';

@Entity('clinic')
export class Clinic {
  @PrimaryGeneratedColumn('uuid')
  clinic_id: string;

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

  // @OneToOne(() => Subscription, {
  //   cascade: true,
  //   eager: true,
  // })
  // @JoinColumn()
  // subscription: Subscription;

  @OneToOne(() => Subscription, (subscription) => subscription.clinic, {
    eager: true,
  }) // specify inverse side as a second parameter
  subscription: Subscription;
}
