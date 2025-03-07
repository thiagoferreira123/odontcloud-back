import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Clinic } from '../../clinic/entities/clinic.entity';

export enum PriceNames {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
  SEMI_ANNUALLY = 'semi-annually',
}

export const priceIds = {
  [PriceNames.MONTHLY]: 'price_1Qzn6WP1MptS4e4Lyuvtonj5',
  [PriceNames.SEMI_ANNUALLY]: 'price_1P8wEM09PtgHIHG79TYRC4ez',
  [PriceNames.YEARLY]: 'price_1Qzn62P1MptS4e4LGckb84qc',
};

export const priceNames = {
  [priceIds[PriceNames.MONTHLY]]: PriceNames.MONTHLY,
  [priceIds[PriceNames.SEMI_ANNUALLY]]: PriceNames.SEMI_ANNUALLY,
  [priceIds[PriceNames.YEARLY]]: PriceNames.YEARLY,
};

@Entity('subscriptions')
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clinic_id: string;

  @Column({ name: 'stripe_subscription_id' })
  stripe_subscription_id: string;

  @Column()
  subscription_status: string;

  @Column()
  subscription_level: PriceNames;

  @OneToOne(() => Clinic)
  @JoinColumn({ name: 'clinic_id' })
  clinic: Clinic;
}
