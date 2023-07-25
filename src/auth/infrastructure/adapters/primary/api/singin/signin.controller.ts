import { Body, Controller, HttpCode, HttpStatus, Post, Session } from '@nestjs/common';
import { SignUpRequestDto } from './dto/signup.request.dto';
import { UserResponseDto } from './dto/user.response.dto';
import { SerializeResponseDto } from '@utils/decorators/serialize.decorator';
import { SignInService } from '@auth/usecases/signin/signin.service';
import { IUsersSignInController } from '@auth/infrastructure/ports/primary/api/signin.controller.interface';

@Controller('auth')
export class SignInController implements IUsersSignInController<SignUpRequestDto, UserResponseDto, any> {
  constructor(private signInService: SignInService) {}

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  async signin(@Body() body: SignUpRequestDto, @Session() session): Promise<UserResponseDto> {
    const user: UserResponseDto = await this.signInService.signin(body.email, body.password);
    session.userId = user.id;
    console.log(session);
    return user;
  }
}
