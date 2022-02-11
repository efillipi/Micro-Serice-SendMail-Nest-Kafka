import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function server() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['host.docker.internal:9094'],
      },
      consumer: {
        groupId: 'emails',
      },
    },
  });

  await app.startAllMicroservices();
}
server();
