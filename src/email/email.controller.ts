/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from './mailer.service';

// where our email API handles requests
@Controller('email')
export class EmailController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('/send')
  async sendEmail(@Body() body: any) {
    const { to, subject, text } = body;

    // Add validation for required fields

    try {
      await this.mailerService.sendEmail({ to, subject, text });
      return { success: true, message: 'Email sent successfully' };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to send email',
        error: error.message,
      };
    }
  }
}
