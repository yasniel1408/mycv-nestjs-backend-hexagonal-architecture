import * as dotenv from 'dotenv';
import * as fs from 'fs';

import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  public get port(): number {
    return Number(this.envConfig.PORT);
  }

  public get projectId(): string {
    return this.envConfig.PROJECT_ID;
  }

  public get corsAllowedOrigin(): string[] | string {
    if (this.envConfig.CORS_ALLOWED_ORIGIN === '*') {
      return this.envConfig.CORS_ALLOWED_ORIGIN;
    }
    return this.envConfig.CORS_ALLOWED_ORIGIN.split(',');
  }

  public get jwtKey() {
    return this.envConfig.JWT_KEY;
  }
}
