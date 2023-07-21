import { Body, Controller, Post } from '@nestjs/common';
import { SingUpRequestDto } from './dto/request/singup.request.dto';
import { IUsersSingUpController } from '@users/infrastructure/ports/primary/api/users.singup.controller';
import { SingUpService } from '@users/usecases/singup/singup.service';

@Controller('auth')
export class UsersSingUpController implements IUsersSingUpController<SingUpRequestDto, void> {
  constructor(private singUpService: SingUpService) {}

  @Post('/signup')
  signup(@Body() body: SingUpRequestDto) {
    this.singUpService.singUp(body.email, body.password);
    // eslint-disable-next-line no-console
    console.log(body);
  }
}
