import { Injectable } from '@nestjs/common';
import { MailService } from '@sendgrid/mail';
import ISenMailDTO from '../dtos/ISenMailDTO';

@Injectable()
export class SendgridService {
  private client: MailService;

  constructor() {
    this.client = new MailService();
  }

  public async sendMail({ to, subject, body }: ISenMailDTO) {
    this.client.setApiKey(process.env.SG_API_KEY);

    await this.client.send({
      from: process.env.MAIL_CONTACT as string,
      to: to.email,
      subject,
      html: body,
    });
  }
}
