import { Module } from '@nestjs/common';
import { CardMachineService } from './clinic-card-machine.service';
import { CardMachineController } from './clinic-card-machine.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CardMachineProviders } from './clinic-card-machine.provider';


@Module({
  imports: [DatabaseModule],
  controllers: [CardMachineController],
  providers: [... CardMachineProviders, CardMachineService],
  exports: [CardMachineService]
})
export class CardMachineModule {}  