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
        clientId: 'nest',
        brokers: [`${process.env.KAFKA_URL}`],
      },
      consumer: {
        groupId: 'nest',
      },
    },
  });

  await app.startAllMicroservices();
}
server();
