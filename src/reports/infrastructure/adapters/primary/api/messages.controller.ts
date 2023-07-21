import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageRequestDto } from '../../../../infrastructure/models/request/MessageRequestDto';
import { IMessagesPortController } from '../../../../infrastructure/ports/primary/api/messages.controller';

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
