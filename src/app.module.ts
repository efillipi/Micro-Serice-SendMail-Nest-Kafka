import { Module } from '@nestjs/common';
import { SendMailsModule } from './send-mails/send-mails.module';
import { ConfigModule } from '@nestjs/config';
import { MailProviderModule } from './mail-provider/mail-provider.module';

@Module({
  imports: [ConfigModule.forRoot(), SendMailsModule, MailProviderModule],
})
export class AppModule {}
