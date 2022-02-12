import { Controller, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SendMailsService } from './send-mails.service';
import { KafkaCreateDto } from './dto/create-send-mail.dto';

@Controller()
export class SendMailsController {
  constructor(private readonly sendMailsService: SendMailsService) {}

  @MessagePattern('emails')
  create(@Payload(new ValidationPipe()) { value }: KafkaCreateDto) {
    return this.sendMailsService.create(value);
  }
}
