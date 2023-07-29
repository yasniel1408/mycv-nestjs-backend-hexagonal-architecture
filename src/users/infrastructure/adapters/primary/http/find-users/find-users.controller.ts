import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { UserResponseDto } from './dto/user.response.dto';
import { IFindUsersController } from '@users/domain/ports/primary/api/find-users.controller.interface';
import { SerializeResponseDto } from '@shared/infrastructure/decorators/serialize.decorator';
import { FindUsersService } from '@users/application/services/find-users/find-users.service';

@Controller('users')
export class FindUsersController implements IFindUsersController<string, UserResponseDto> {
  constructor(private findUsersService: FindUsersService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  async find(@Query('email') email?: string): Promise<UserResponseDto[]> {
    return await this.findUsersService.find(email);
  }
}
