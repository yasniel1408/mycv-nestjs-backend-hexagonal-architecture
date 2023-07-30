import { Module } from '@nestjs/common';
import { ReportsModule } from '@reports/reports.module';
import { UsersModule } from '@users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@auth/infrastructure/guards/jwt-auth.guard';
import { join } from 'path';
import { isDev, isLocal, isProd, isQa, isStaging } from '@src/config/constants';
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
    TypeOrmModule.forRoot(
      isDev && isLocal && isStaging
        ? {
            type: 'sqlite',
            database: 'db.sqlite',
            entities: [join(__dirname, '../../**/**.dao{.ts,.js}')],
            synchronize: true, // esto solo es para desarrollo
            logging: false, // esto es para debugear las consultas a la base de datos
            migrations: ['../../**/**.migration{.ts,.js}'],
            subscribers: ['../../**/**.subscriber{.ts,.js}'],
          }
        : isQa
        ? {
            type: 'sqlite',
            database: ':memory:',
            entities: [join(__dirname, '../../**/**.dao{.ts,.js}')],
            synchronize: true, // esto solo es para desarrollo
            logging: false, // esto es para debugear las consultas a la base de datos
          }
        : isProd
        ? {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [join(__dirname, '../../**/**.dao{.ts,.js}')],
            synchronize: false,
            migrations: ['../../**/**.migration{.ts,.js}'],
            subscribers: ['../../**/**.subscriber{.ts,.js}'],
          }
        : {},
    ),
    UsersModule,
    ReportsModule,
    AuthModule,
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
