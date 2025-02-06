import { PartialType } from '@nestjs/mapped-types';
import { CreateWhatsappMessageDto } from './create-whatsapp-message.dto';

export class UpdateWhatsappMessageDto extends PartialType(
  CreateWhatsappMessageDto,
) {}
