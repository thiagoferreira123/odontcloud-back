import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PriceNames } from '../entities/subscription.entity';

export class CreateSubscriptionDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(PriceNames)
  priceName: PriceNames;
}
