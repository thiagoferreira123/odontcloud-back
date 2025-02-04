import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CarePlanBudgetPaymentHistoric } from './entities/budget-payment-historic.entity';
import { CarePlanBudgetPaymentHistoricService } from './budget-payment-historic.service';

@Controller('budget-payment-historic')
export class CarePlanBudgetPaymentHistoricController {
  constructor(
    private readonly paymentService: CarePlanBudgetPaymentHistoricService,
  ) {}

  @Post()
  create(
    @Body() paymentDetails: CarePlanBudgetPaymentHistoric,
  ): Promise<CarePlanBudgetPaymentHistoric> {
    return this.paymentService.create(paymentDetails);
  }

  @Get(':payment_historic_id')
  findOne(
    @Param('payment_historic_id') payment_historic_id: string,
  ): Promise<CarePlanBudgetPaymentHistoric> {
    return this.paymentService.findOne(payment_historic_id);
  }

  @Patch(':payment_historic_id')
  update(
    @Param('payment_historic_id') payment_historic_id: string,
    @Body() paymentDetails: Partial<CarePlanBudgetPaymentHistoric>,
  ): Promise<CarePlanBudgetPaymentHistoric> {
    return this.paymentService.update(payment_historic_id, paymentDetails);
  }

  @Delete(':payment_historic_id')
  remove(
    @Param('payment_historic_id') payment_historic_id: string,
  ): Promise<void> {
    return this.paymentService.remove(payment_historic_id);
  }

  // Rota POST para criar o histórico de pagamentos
  @Post('/create-payment-history')
  createPaymentHistory(
    @Body()
    {
      paymentBudgetId,
      totalAmount,
      installments,
      budgetEntranceValue,
      firstPaymentDate,
      entranceDate,
    }: {
      paymentBudgetId: string;
      totalAmount: number;
      installments: number;
      budgetEntranceValue: string;
      firstPaymentDate: string;
      entranceDate: string;
    },
  ) {
    const firstPaymentDateObj = new Date(firstPaymentDate);
    const entranceDateObj = new Date(entranceDate);

    return this.paymentService.createPaymentHistory(
      paymentBudgetId,
      totalAmount,
      installments,
      budgetEntranceValue,
      firstPaymentDateObj,
      entranceDateObj,
    );
  }
}
