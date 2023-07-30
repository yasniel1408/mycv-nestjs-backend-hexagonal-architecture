import { ConfigService } from '@nestjs/config';
import { setupApp } from './setup-app';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '@app/app.module';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  setupApp(app);
  await app.listen(configService.getOrThrow<number>('PORT'));
}
bootstrap();
