import { Controller, HttpCode, HttpStatus, Post, Request } from '@nestjs/common';
import { ISignOutController } from '@auth/infrastructure/ports/primary/http/signout.controller.interface';

@Controller('auth')
export class SignOutController implements ISignOutController {
  @Post('/signout')
  @HttpCode(HttpStatus.OK)
  async whoami(@Request() request): Promise<any> {
    request.user = null;
    return { ok: true };
  }
}
