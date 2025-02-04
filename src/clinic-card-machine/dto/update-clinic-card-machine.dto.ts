import { PartialType } from '@nestjs/mapped-types';
import { CreateCardMachineDTO } from './create-clinic-card-machine.dto';

export class UpdateCardMachineDto extends PartialType(CreateCardMachineDTO) {}
