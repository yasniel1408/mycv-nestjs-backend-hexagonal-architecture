import { Module } from '@nestjs/common';
import { MessagesController } from './infrastructure/ports/primary/api-rest/messages.controller';

@Module({
  controllers: [MessagesController],
})
export class MessagesModule {}
