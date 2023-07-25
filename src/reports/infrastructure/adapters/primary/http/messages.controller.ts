import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageRequestDto } from '../../../models/request/MessageRequestDto';
import { IMessagesPortController } from '../../../ports/primary/http/messages.controller';

@Controller('messages')
export class MessagesController implements IMessagesPortController<MessageRequestDto> {
  @Post()
  createMessage(@Body() body: MessageRequestDto): any {
    return body.content;
  }

  @Get()
  listMessages(): [] {
    return [];
  }

  @Get('/:id')
  getMessage(@Param('id') id: string): string {
    return id;
  }
}
