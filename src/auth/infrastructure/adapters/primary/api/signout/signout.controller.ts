import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ISignOutController } from '@auth/infrastructure/ports/primary/api/signout.controller.interface';

@Controller('auth')
export class SignOutController implements ISignOutController {
  @Post('/signout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async whoami(): Promise<any> {
    return { ok: true };
  }
}
