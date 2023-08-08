import { Module } from '@nestjs/common';
import { ReportsModule } from '@reports/reports.module';
import { UsersModule } from '@users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@auth/infrastructure/guards/jwt-auth.guard';
import { join } from 'path';
import { isProd } from '@config/constants';
dotenv.config();

@Module({
  imports: [
    // Environment
    ConfigModule.forRoot({
      envFilePath: `./src/config/environments/${process.env.NODE_ENV}.env`,
      isGlobal: true,
      cache: true,
    }),
    // Database
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        ({
          type: configService.getOrThrow<string>('DB_TYPE'),
          host: configService.getOrThrow<string>('DB_HOST'),
          port: configService.getOrThrow<string>('DB_PORT'),
          username: configService.getOrThrow<string>('DB_USERNAME'),
          password: configService.getOrThrow<string>('DB_PASSWORD'),
          database: configService.getOrThrow<string>('DB_DATABASE'),
          entities: [join(__dirname, '../**/**.dao{.ts,.js}')],
          migrations: [join(__dirname, '../**/**.migration{.ts,.js}')],
          subscribers: [join(__dirname, '../**/**.subscriber{.ts,.js}')],
          synchronize: isProd ? false : true, // esto solo es para desarrollo
          logging: false, // esto es para debugear las consultas a la base de datos
        } as TypeOrmModuleOptions),
      inject: [ConfigService],
    }),
    UsersModule,
    ReportsModule,
    AuthModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD, // Proteger la app con JWT, por defautl debes estar autenticado para acceder a cualquier ruta
      useClass: JwtAuthGuard,
    },
  ],
  exports: [],
})
export class AppModule {}
