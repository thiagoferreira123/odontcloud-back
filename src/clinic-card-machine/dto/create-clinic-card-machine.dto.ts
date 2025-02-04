import { IsString, Length } from 'class-validator';

export class CreateCardMachineDTO {
  @IsString()
  @Length(1, 255)
  card_machine_id: string;
  
  @IsString()
  @Length(1, 255)
  card_machine_clinic_id: string;

  @IsString()
  @Length(1, 255)
  card_machine_brand: string;

  @IsString()
  @Length(1, 255)
  card_machine_surname: string;

  @IsString()
  @Length(1, 255)
  card_machine_fee_per_pix_operation: string;

  @IsString()
  @Length(1, 255)
  card_machine_fee_per_debit_transaction: string;

  @IsString()
  @Length(1, 255)
  card_machine_fee_per_cash_credit_transaction: string;

  @IsString()
  @Length(1, 255)
  card_machine_fee_per_credit_operation_2_to_6_times: string;
}
