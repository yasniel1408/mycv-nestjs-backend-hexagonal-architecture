import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from '@app/app.module';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@config/config.service';
const cookieSession = require('cookie-session');

const packageJson = require(path.resolve('package.json'));

async function bootstrap() {
  process.env.API_VERSION = packageJson.version;

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(
    cookieSession({
      keys: [process.env.COOKIE_SESSION_KEY],
    }),
  );

  // app.set('trust proxy', true); esto no me acuerdo para que era
  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // esto sirve para evitar que se meta churre en el endpoind
    }),
  );
  app.setGlobalPrefix('api/v1');

  app.enableCors({
    origin: configService.corsAllowedOrigin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  await app.listen(configService.port);
}
bootstrap();
