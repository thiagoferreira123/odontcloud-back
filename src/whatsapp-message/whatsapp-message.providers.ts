import { DataSource } from 'typeorm';
import { WhatsappMessage } from './entities/whatsapp-message.entity';

export const WhatsappMessageProviders = [
  {
    provide: 'WhatsappMessage',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(WhatsappMessage),
    inject: ['DATA_SOURCE'],
  },
];
