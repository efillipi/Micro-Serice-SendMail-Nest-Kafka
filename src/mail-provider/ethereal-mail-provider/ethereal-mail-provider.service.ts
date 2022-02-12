import { Injectable } from '@nestjs/common';
import ISenMailDTO from '../dtos/ISenMailDTO';
import {
  Transporter,
  createTransport,
  getTestMessageUrl,
  createTestAccount,
} from 'nodemailer';

@Injectable()
export class EtherealMailProviderService {
  private client: Transporter;

  constructor() {
    createTestAccount().then((account) => {
      const transporter = createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }

  public async sendMail({ to, subject, body }: ISenMailDTO) {
    const message = await this.client.sendMail({
      to: to.email,
      subject,
      html: body,
    });

    console.log('Preview URL: %s', getTestMessageUrl(message));
  }
}
