import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { WhatsappMessageService } from './whatsapp-message.service';
import { CreateWhatsappMessageDto } from './dto/create-whatsapp-message.dto';
import { UpdateWhatsappMessageDto } from './dto/update-whatsapp-message.dto';
import { WhatsappMessage } from './entities/whatsapp-message.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { ClinicDecorator } from 'src/decorators/clinic.decorator';

@Controller('whatsapp-message')
export class WhatsappMessageController {
  constructor(
    private readonly whatsappMessageService: WhatsappMessageService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @Body() createWhatsappMessageDto: CreateWhatsappMessageDto,
    @ClinicDecorator('clinic_id') whatsapp_message_clinic_id: string,
  ): Promise<WhatsappMessage> {
    return this.whatsappMessageService.create(
      createWhatsappMessageDto,
      whatsapp_message_clinic_id,
    );
  }

  @UseGuards(AuthGuard)
  @Post('send-appointment-cancelation/:patientId')
  sendAppointmentCancelationByProfessionalAlert(
    @Param('patientId') patientId: string,
    @ClinicDecorator('clinic_id') whatsapp_message_clinic_id: string,
  ) {
    return this.whatsappMessageService.sendAppointmentCancelationByProfessionalAlert(
      patientId,
      whatsapp_message_clinic_id,
    );
  }

  @UseGuards(AuthGuard)
  @Get('')
  findOneByclinicId(
    @ClinicDecorator('clinic_id') clinicId: string,
  ): Promise<WhatsappMessage> {
    return this.whatsappMessageService.findOneByclinicId(clinicId);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateWhatsappMessageDto: UpdateWhatsappMessageDto,
  ): Promise<WhatsappMessage> {
    return this.whatsappMessageService.update(id, updateWhatsappMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.whatsappMessageService.remove(id);
  }
}
