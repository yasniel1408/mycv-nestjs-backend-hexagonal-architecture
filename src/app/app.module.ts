import { Module } from '@nestjs/common';
import { ConfigModule } from '@config/config.module';
import { ReportsModule } from '@reports/reports.module';
import { UsersModule } from '@users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [join(__dirname, '../**/**.entity{.ts,.js}')],
      synchronize: true, // esto solo es para desarrollo
    }),
    ConfigModule,
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
