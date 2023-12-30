/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

// Injectable indicates that we can use this class with the decorator within other files.
@Injectable()
export class MailerService {
  async sendEmail({
    to,
    subject,
    text,
  }: {
    to: string;
    subject: string;
    text: string;
  }) {
    const transporter = nodemailer.createTransport({
      // Add your email service configuration here (e.g., SMTP settings)
    });

    const mailOptions = {
      from: 'your-email@example.com',
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
  }
}
