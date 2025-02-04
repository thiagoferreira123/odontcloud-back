import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PatientReceiptService } from './patient-receipt.service';
import { PatientReceipt } from './entities/patient-receipt.entity';

@Controller('patient-receipt')
export class PatientReceiptController {
  constructor(private readonly receiptService: PatientReceiptService) {}

  @Post()
  create(@Body() patientDetails: PatientReceipt): Promise<PatientReceipt> {
    return this.receiptService.create(patientDetails);
  }

  @Get(':receipt_id')
  findOne(@Param('receipt_id') receipt_id: string): Promise<PatientReceipt> {
    return this.receiptService.findOne(receipt_id);
  }

  @Patch(':receipt_id')
  update(
    @Param('receipt_id') receipt_id: string,
    @Body() patientDetails: Partial<PatientReceipt>,
  ): Promise<PatientReceipt> {
    return this.receiptService.update(receipt_id, patientDetails);
  }

  @Delete(':receipt_id')
  remove(@Param('receipt_id') receipt_id: string): Promise<void> {
    return this.receiptService.remove(receipt_id);
  }

  @Get('by-patient/:receipt_patient_id')
  findAllByPatientId(
    @Param('receipt_patient_id') receipt_patient_id: string,
  ): Promise<PatientReceipt[]> {
    return this.receiptService.findAllByPatientId(receipt_patient_id);
  }
}
