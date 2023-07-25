import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { SignUpRequestDto } from './dto/signup.request.dto';
import { UserResponseDto } from './dto/user.response.dto';
import { SerializeResponseDto } from '@utils/decorators/serialize.decorator';
import { SignInService } from '@auth/application/signin/signin.service';
import { IUsersSignInController } from '@auth/infrastructure/ports/primary/http/signin.controller.interface';
import { Public } from '@utils/decorators/public.decorator';

@Controller('auth')
export class SignInController implements IUsersSignInController<SignUpRequestDto, UserResponseDto> {
  constructor(private signInService: SignInService) {}

  @Public()
  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  async signin(@Body() body: SignUpRequestDto): Promise<{ user: UserResponseDto; access_token: string }> {
    const { user, access_token } = await this.signInService.signin(body.email, body.password);
    return { user, access_token };
  }
}
