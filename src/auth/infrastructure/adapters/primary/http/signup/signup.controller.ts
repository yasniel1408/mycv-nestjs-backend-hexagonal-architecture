import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignUpRequestDto } from './dto/signup.request.dto';
import { IUsersSignUpController } from '@auth/domain/ports/primary/http/signup.controller.interface';
import { UserResponseDto } from './dto/user.response.dto';
import { SerializeResponseDto } from '@shared/infrastructure/decorators/serialize.decorator';
import { SignUpService } from '@auth/application/signup/signup.service';
import { Public } from '@shared/infrastructure/decorators/public.decorator';

@Controller('auth')
export class SingUpController implements IUsersSignUpController<SignUpRequestDto, UserResponseDto> {
  constructor(private singUpService: SignUpService) {}

  @Public()
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @SerializeResponseDto(UserResponseDto)
  async signup(@Body() body: SignUpRequestDto): Promise<UserResponseDto> {
    const user: UserResponseDto = await this.singUpService.signup(body.email, body.password);
    return user;
  }
}
