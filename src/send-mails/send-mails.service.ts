import { Injectable } from '@nestjs/common';
import { MailExportsService } from 'src/mail-provider/mail-exports/mail-exports.service';
import { CreateSendMailDto } from './dto/create-send-mail.dto';

@Injectable()
export class SendMailsService {
  constructor(private mailService: MailExportsService) {}

  async create(createSendMailDto: CreateSendMailDto) {
    const { body, emails, subject } = createSendMailDto;
    await this.mailService.sendMail({
      to: {
        email: emails,
      },
      subject,
      body,
    });
  }
}
