import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import rawBodyMiddleware from './middleware/raw-body-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.use(rawBodyMiddleware());

  app.useGlobalPipes(new ValidationPipe());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.enableCors({
    origin: [
      'https://*.odontcloud.com.br', // Habilita CORS para todos os subdomínios de odontcloud.com.br
      'https://dash.odontcloud.com.br', // Permite especificamente este subdomínio
      'https://another-subdomain.odontcloud.com.br', // Outro subdomínio específico
      /https?:\/\/localhost(:[0-9]+)?$/, // Regex para localhost com qualquer porta e ambos os protocolos
    ],
    credentials: true, // Permite cookies e credenciais de autenticação nas solicitações cross-origin
  });

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(3001);
}
bootstrap();
