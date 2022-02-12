import { Module } from '@nestjs/common';
import { SendgridService } from './mail-provider/mail-provider.service';
import { EtherealMailProviderService } from './ethereal-mail-provider/ethereal-mail-provider.service';
import { MailExportsService } from './mail-exports/mail-exports.service';

@Module({
  providers: [SendgridService, EtherealMailProviderService, MailExportsService],
  exports: [MailExportsService],
})
export class MailProviderModule {}
