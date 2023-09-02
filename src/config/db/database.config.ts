import { join } from 'path';
import { isLocal, isTest } from '../constants';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

const typeOrmConfig = (configService: ConfigService) =>
  ({
    type: configService.getOrThrow<string>('DB_TYPE'),
    host: configService.getOrThrow<string>('DB_HOST'),
    port: configService.getOrThrow<string>('DB_PORT'),
    username: configService.getOrThrow<string>('DB_USERNAME'),
    password: configService.getOrThrow<string>('DB_PASSWORD'),
    database: configService.getOrThrow<string>('DB_DATABASE'),
    entities: [join(__dirname, 'src/**/**.dao{.ts,.js}')],
    migrations: [join(__dirname, 'src/**/**.migration{.ts,.js}')],
    synchronize: isLocal || isTest ? true : false, // esto solo es para desarrollo, para produccion usamos migraciones
    logging: false, // esto es para debugear las consultas a la base de datos
  } as TypeOrmModuleOptions);

export default typeOrmConfig;
