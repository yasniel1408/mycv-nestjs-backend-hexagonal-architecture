import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignInResponseDto } from './dto/signin.response.dto';
import { SerializeResponseDto } from '@shared/infrastructure/decorators/serialize.decorator';
import { IUsersSignInController } from '@auth/domain/ports/primary/http/signin.controller.interface';

import { SignInRequestDto } from './dto/signin.request.dto';
import { SignInService } from '@auth/application/signin/signin.service';
import { Public } from '@shared/infrastructure/decorators/public.decorator';

@Controller('auth')
export class SignInController implements IUsersSignInController<SignInRequestDto, SignInResponseDto> {
  constructor(private signInService: SignInService) {}

  @Public()
  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(SignInResponseDto)
  async signin(@Body() body: SignInRequestDto): Promise<SignInResponseDto> {
    const token = await this.signInService.signin(body.email, body.password);
    return { token };
  }
}
