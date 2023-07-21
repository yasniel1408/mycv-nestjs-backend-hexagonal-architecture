import { Module } from '@nestjs/common';

import { ConfigService } from './config.service';

const ENV_LOCAL = 'local';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(
        `./src/config/environments/${process.env.NODE_ENV || ENV_LOCAL}.env`,
      ),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
