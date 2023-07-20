import { Controller, Get } from '@nestjs/common';
import { IMessagesPortController } from 'src/messages/infrastructure/ports/primary/api/messages.controller';

@Controller('messages')
export class MessagesController implements IMessagesPortController {
  @Get()
  getMessage(): string {
    throw new Error('Method not implemented.');
  }
}
