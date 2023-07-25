import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from '@utils/decorators/public.decorator';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  public healthCheck(): any {
    return this.appService.getAPIData();
  }
}
