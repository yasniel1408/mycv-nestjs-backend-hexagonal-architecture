import { Module } from '@nestjs/common';

import { ConfigService } from './config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { isProd } from './constants';

@Module({
  imports: [
    // Database
    TypeOrmModule.forRoot(
      !isProd
        ? {
            type: 'sqlite',
            database: 'db.sqlite',
            entities: [join(__dirname, '../**/**.entity{.ts,.js}')],
            synchronize: true, // esto solo es para desarrollo
            logging: true, // esto es para debugear
          }
        : {},
    ),
  ],
  // Env variables
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`./src/config/environments/${process.env.NODE_ENV}.env`),
    },
  ],

  exports: [ConfigService],
})
export class ConfigModule {}
