import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';

export const setupApp = (app: INestApplication) => {
  const packageJson = require(path.resolve('package.json'));
  process.env.API_VERSION = packageJson.version;

  // app.set('trust proxy', true); //esto no me acuerdo para que era

  // esto es para validar los DTO
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Automatically transform payloads to DTO instances
      whitelist: true, // esto sirve para evitar que se meta churre en el endpoind
      forbidNonWhitelisted: true, // Throw an error if payload contains non-whitelisted properties
    }),
  );
  app.setGlobalPrefix('api/v1');

  const configService = app.get(ConfigService);
  app.enableCors({
    origin: configService.getOrThrow('CORS_ALLOWED_ORIGIN'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
};
