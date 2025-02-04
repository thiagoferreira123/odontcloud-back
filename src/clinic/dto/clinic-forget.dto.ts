import { IsEmail } from 'class-validator';

export class ClinicForgetDTO {
  @IsEmail()
  email: string;
}
