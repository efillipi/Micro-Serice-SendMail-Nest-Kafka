import { Module } from '@nestjs/common';
import { SendMailsModule } from './send-mails/send-mails.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), SendMailsModule],
})
export class AppModule {}
