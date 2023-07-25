import { Module } from '@nestjs/common';
import { ConfigModule } from '@config/config.module';
import { ReportsModule } from '@reports/reports.module';
import { UsersModule } from '@users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@auth/auth.module';

import * as dotenv from 'dotenv';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@utils/guards/jwt-auth.guard';
dotenv.config();

@Module({
  imports: [ConfigModule, UsersModule, ReportsModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [],
})
export class AppModule {}
