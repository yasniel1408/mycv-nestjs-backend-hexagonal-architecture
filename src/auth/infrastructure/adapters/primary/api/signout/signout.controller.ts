import { Controller, HttpCode, HttpStatus, Post, Session } from '@nestjs/common';
import { ISignOutController } from '@auth/infrastructure/ports/primary/api/signout.controller.interface';

@Controller('auth')
export class SignOutController implements ISignOutController<any> {
  @Post('/signout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async whoami(@Session() session): Promise<void> {
    session.userId = null;
  }
}
