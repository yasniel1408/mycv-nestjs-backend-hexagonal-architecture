import { Injectable } from '@nestjs/common';
import { ConfigService } from '@config/config.service';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  public async getAPIData(): Promise<any> {
    return {
      env: this.config.env,
      version: process.env.API_VERSION,
    };
  }
}
