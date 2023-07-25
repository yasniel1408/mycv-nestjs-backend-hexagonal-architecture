import { Controller, HttpCode, HttpStatus, Post, Session } from '@nestjs/common';
import { SerializeResponseDto } from '@utils/decorators/serialize.decorator';
import { IWhoAmIController } from '@auth/infrastructure/ports/primary/api/whoami.controller.interface';
import { UserResponseDto } from './dto/user.response.dto';
import { FindOneUserService } from '@users/usecases/find-one-user/find-one-user.service';

@Controller('auth')
export class WhoAmIController implements IWhoAmIController<UserResponseDto, any> {
  constructor(private findOneUserService: FindOneUserService) {}

  @Post('/whoami')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  async whoami(@Session() session): Promise<UserResponseDto> {
    console.log(session.userId);
    const user: UserResponseDto = await this.findOneUserService.findOne(session.userId);
    return user;
  }
}
