import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';

export const setupApp = (app: any) => {
  const packageJson = require(path.resolve('package.json'));
  process.env.API_VERSION = packageJson.version;

  // app.set('trust proxy', true); //esto no me acuerdo para que era

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // esto sirve para evitar que se meta churre en el endpoind
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
