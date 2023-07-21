import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public healthCheck(): any {
    return { version: process.env.API_VERSION };
  }

  @Get('versions')
  public getVersions(): Promise<any> {
    return this.appService.getVersion();
  }
}
