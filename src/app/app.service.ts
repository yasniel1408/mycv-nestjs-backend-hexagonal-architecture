import { Injectable } from '@nestjs/common';
import { ConfigService } from '@config/config.service';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  public async getAPIData(): Promise<any> {
    return {
      env: process.env.NODE_ENV,
      version: process.env.API_VERSION,
    };
  }
}
