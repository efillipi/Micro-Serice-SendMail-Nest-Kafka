interface IMailContact {
  email: string[];
}

export default interface ISenMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  body: string;
}
