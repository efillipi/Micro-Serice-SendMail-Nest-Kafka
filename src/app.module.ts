import { Module } from '@nestjs/common';
import { SendMailsModule } from './send-mails/send-mails.module';

@Module({
  imports: [SendMailsModule],
})
export class AppModule {}
