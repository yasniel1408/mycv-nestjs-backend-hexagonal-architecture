import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SerializeResponseDto } from '@shared/infrastructure/decorators/serialize.decorator';
import { IWhoAmIController } from '@auth/domain/ports/primary/http/whoami.controller.interface';
import { UserResponseDto } from './dto/user.response.dto';
import { CurrentUser } from '@shared/infrastructure/decorators/current-user.decorator';
@Controller('auth')
export class WhoAmIController implements IWhoAmIController<UserResponseDto> {
  @Post('/whoami')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  whoami(@CurrentUser() user): UserResponseDto {
    return user;
  }
}
