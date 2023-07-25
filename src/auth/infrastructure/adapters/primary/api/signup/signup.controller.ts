import { Body, Controller, HttpCode, HttpStatus, Post, Session } from '@nestjs/common';
import { SignUpRequestDto } from './dto/signup.request.dto';
import { SignUpService } from '@auth/usecases/signup/signup.service';
import { IUsersSignUpController } from '@auth/infrastructure/ports/primary/api/signup.controller.interface';
import { UserResponseDto } from './dto/user.response.dto';
import { SerializeResponseDto } from '@utils/decorators/serialize.decorator';

@Controller('auth')
export class SingUpController implements IUsersSignUpController<SignUpRequestDto, UserResponseDto, any> {
  constructor(private singUpService: SignUpService) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @SerializeResponseDto(UserResponseDto)
  async signup(@Body() body: SignUpRequestDto, @Session() session): Promise<UserResponseDto> {
    const user: UserResponseDto = await this.singUpService.signup(body.email, body.password);
    session.userId = user.id;
    return user;
  }
}
