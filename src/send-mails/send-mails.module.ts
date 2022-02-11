import { Module } from '@nestjs/common';
import { SendMailsService } from './send-mails.service';
import { SendMailsController } from './send-mails.controller';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'nest',
            brokers: ['host.docker.internal:9094'],
          },
          consumer: {
            groupId: 'nest',
          },
        },
      },
    ]),
  ],
  controllers: [SendMailsController],
  providers: [
    SendMailsService,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaClient: ClientKafka) => {
        return kafkaClient.connect();
      },
      inject: ['KAFKA_SERVICE'],
    },
  ],
})
export class SendMailsModule {}
