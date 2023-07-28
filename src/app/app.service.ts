import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  public async getAPIData(): Promise<any> {
    return {
      env: this.config.getOrThrow<string>('NODE_ENV'),
      version: this.config.getOrThrow<string>('API_VERSION'),
    };
  }
}
