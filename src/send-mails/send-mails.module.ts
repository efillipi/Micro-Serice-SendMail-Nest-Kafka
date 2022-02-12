import { Module } from '@nestjs/common';
import { SendMailsService } from './send-mails.service';
import { SendMailsController } from './send-mails.controller';
import { MailProviderModule } from 'src/mail-provider/mail-provider.module';

@Module({
  imports: [MailProviderModule],
  controllers: [SendMailsController],
  providers: [SendMailsService],
})
export class SendMailsModule {}
