import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignUpRequestDto } from './dto/signup.request.dto';
import { UserResponseDto } from './dto/user.response.dto';
import { SerializeResponseDto } from '@utils/decorators/serialize.decorator';
import { SignInService } from '@auth/usecases/signin/signin.service';
import { IUsersSignInController } from '@auth/infrastructure/ports/primary/api/signin.controller.interface';

@Controller('auth')
export class UsersSignInController implements IUsersSignInController<SignUpRequestDto, UserResponseDto> {
  constructor(private signInService: SignInService) {}

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  async signin(@Body() body: SignUpRequestDto): Promise<UserResponseDto> {
    return this.signInService.signin(body.email, body.password);
  }
}
