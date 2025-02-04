import {
  Controller,
  Post,
  UseGuards,
  Get,
  Req,
  Headers,
  BadRequestException,
  Body,
} from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { ClinicDecorator } from '../decorators/clinic.decorator';
import { AuthGuard } from '../guards/auth.guard';
import RequestWithRawBody from '../middleware/requestWithRawBody.interface';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';

@Controller('payments')
export class SubscriptionController {
  constructor(private readonly paymentsService: SubscriptionService) {}

  @UseGuards(AuthGuard)
  @Get('get-portal-link')
  async getBillingPortal(@ClinicDecorator('clinic_id') clinic_id: string) {
    return this.paymentsService.createBillingPortal(clinic_id);
  }

  @UseGuards(AuthGuard)
  @Post('subscribe')
  createCheckoutSession(
    @ClinicDecorator('clinic_id') clinic_id: string,
    @Body() { priceName }: CreateSubscriptionDto,
  ) {
    return this.paymentsService.createCheckoutSession(clinic_id, priceName);
  }

  @Post('webhook')
  async handleIncomingEvents(
    @Headers('stripe-signature') signature: string,
    @Req() request: RequestWithRawBody,
  ) {
    if (!signature) {
      throw new BadRequestException('Missing stripe-signature header');
    }

    await this.paymentsService.webhookHandler(signature, request.rawBody);
  }
}
