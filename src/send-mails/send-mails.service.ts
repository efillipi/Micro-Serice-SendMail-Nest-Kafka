import { Injectable } from '@nestjs/common';
import { CreateSendMailDto } from './dto/create-send-mail.dto';

@Injectable()
export class SendMailsService {
  create(createSendMailDto: CreateSendMailDto) {
    console.log('Enviando email');
    return 'This action adds a new sendMail';
  }
}
