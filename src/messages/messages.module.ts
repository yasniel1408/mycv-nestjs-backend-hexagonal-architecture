import { Module } from '@nestjs/common';
import { MessagesController } from './infrastructure/adapters/primary/api/messages.controller';

@Module({
  controllers: [MessagesController],
})
export class MessagesModule {}
