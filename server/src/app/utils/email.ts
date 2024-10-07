import path from 'path';
import ejs from 'ejs';
import { htmlToText } from 'html-to-text';
import sgMail from '@sendgrid/mail';
import { TUser } from '../modules/user/user.interface';
import { Types } from 'mongoose';

class Email {
  private to: string;
  private firstName: string;
  private url: string;
  private from: string;

  constructor(user: TUser & { _id: Types.ObjectId }, url: string) {
    this.to = user.email;
    this.firstName = user.name;
    this.url = url;
    this.from = `Tech Talk <${process.env.EMAIL_FROM}>`;
  }

  // Send the actual email
  private async send(template: string, subject: string) {
    sgMail.setApiKey(process.env.SENDGRID_PASSWORD as string);

    const email = {
      firstName: this.firstName,
      url: this.url,
      subject,
    };

    const html = await ejs.renderFile(
      // eslint-disable-next-line no-undef
      path.resolve(__dirname, '..', 'views', `${template}.ejs`),
      email,
    );

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText(html),
    };

    const response = await sgMail.send(mailOptions);
    console.log(response, 'Response');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes)!',
    );
  }
}

export default Email;
