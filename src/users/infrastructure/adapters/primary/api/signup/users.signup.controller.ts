import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { IUsersSingUpController } from '@users/infrastructure/ports/primary/api/singup.controller.interface';
import { SingUpService } from '@users/usecases/singup/singup.service';
import { SingUpRequestDto } from './dto/singup.request.dto';

@Controller('auth')
export class UsersSingUpController implements IUsersSingUpController<SingUpRequestDto, void> {
  constructor(private singUpService: SingUpService) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  signup(@Body() body: SingUpRequestDto): void {
    this.singUpService.singUp(body.email, body.password);
  }
}
