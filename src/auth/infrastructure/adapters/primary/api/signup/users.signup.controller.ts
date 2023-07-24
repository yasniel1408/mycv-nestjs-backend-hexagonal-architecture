import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignUpRequestDto } from './dto/signup.request.dto';
import { SignUpService } from '@auth/usecases/signup/signup.service';
import { IUsersSignUpController } from '@auth/infrastructure/ports/primary/api/signup.controller.interface';
import { UserResponseDto } from './dto/user.response.dto';
import { SerializeResponseDto } from '@utils/decorators/serialize.decorator';

@Controller('auth')
export class UsersSingUpController implements IUsersSignUpController<SignUpRequestDto, UserResponseDto> {
  constructor(private singUpService: SignUpService) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @SerializeResponseDto(UserResponseDto)
  async signup(@Body() body: SignUpRequestDto): Promise<UserResponseDto> {
    return this.singUpService.signup(body.email, body.password);
  }
}
