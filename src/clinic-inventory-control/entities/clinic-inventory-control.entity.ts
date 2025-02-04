import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clinic_inventory_control')
export class ClinicInventoryControl {

  @PrimaryGeneratedColumn('uuid')
  inventory_control_product_id: string;

  @Column({ type: 'varchar', length: 255 })
  inventory_control_product_clinic_id: string;

  @Column({ type: 'varchar', length: 255 })
  inventory_control_product_name: string;

  @Column({ type: 'varchar', length: 255 })
  inventory_control_product_expiration: string;

  @Column({ type: 'varchar', length: 255 })
  inventory_control_product_code: string;

  @Column({ type: 'varchar', length: 255 })
  inventory_control_product_quantity: string;

  @Column({ type: 'varchar', length: 255 })
  inventory_control_product_ideal_quantity: string;
}
