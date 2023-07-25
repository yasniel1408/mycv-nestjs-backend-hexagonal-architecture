import { Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { SerializeResponseDto } from '@utils/decorators/serialize.decorator';
import { IWhoAmIController } from '@auth/infrastructure/ports/primary/http/whoami.controller.interface';
import { UserResponseDto } from './dto/user.response.dto';
import { JwtAuthGuard } from '@utils/guards/auth.guard';
@Controller('auth')
export class WhoAmIController implements IWhoAmIController<UserResponseDto> {
  @UseGuards(JwtAuthGuard)
  @Post('/whoami')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  whoami(@Request() request): UserResponseDto {
    return request['user'] as UserResponseDto;
  }
}
