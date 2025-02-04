import { IsString, Length } from 'class-validator';

export class CreateClinicInventoryControlDto {
  @IsString()
  @Length(1, 255)
  inventory_control_product_clinic_id: string;

  @IsString()
  @Length(1, 255)
  inventory_control_product_name: string;

  @IsString()
  @Length(1, 255)
  inventory_control_product_expiration: string;

  @IsString()
  @Length(1, 255)
  inventory_control_product_code: string;

  @IsString()
  @Length(1, 255)
  inventory_control_product_quantity: string;

  @IsString()
  @Length(1, 255)
  inventory_control_product_ideal_quantity: string;
}
