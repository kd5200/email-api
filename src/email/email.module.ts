import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { MailerService } from './mailer.service';

@Module({
  controllers: [EmailController],
  providers: [MailerService],
})
export class EmailModule {}
