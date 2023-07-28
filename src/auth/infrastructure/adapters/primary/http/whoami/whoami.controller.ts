import { Controller, HttpCode, HttpStatus, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { SerializeResponseDto } from '@utils/decorators/serialize.decorator';
import { IWhoAmIController } from '@auth/infrastructure/ports/primary/http/whoami.controller.interface';
import { UserResponseDto } from './dto/user.response.dto';
import { CurrentUser } from '@auth/infrastructure/decorators/current.user.decorator';
import { JwtAuthGuard } from '@auth/infrastructure/guards/jwt-auth.guard';
@Controller('auth')
export class WhoAmIController implements IWhoAmIController<UserResponseDto> {
  @UseGuards(JwtAuthGuard)
  @Post('/whoami')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  whoami(@CurrentUser() user): UserResponseDto {
    return user;
  }
}
