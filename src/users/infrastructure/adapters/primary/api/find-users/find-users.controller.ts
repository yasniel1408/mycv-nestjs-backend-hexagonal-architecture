import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { UserResponseDto } from './dto/user.response.dto';
import { FindUsersService } from '@users/usecases/find-users/find-users.service';
import { IFindUsersController } from '@users/infrastructure/ports/primary/api/find-users.controller.interface';
import { SerializeResponseDto } from '@users/infrastructure/decorators/serialize.decorator';

@Controller('users')
export class FindUsersController implements IFindUsersController<string, UserResponseDto> {
  constructor(private findUsersService: FindUsersService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  async find(@Query('email') email: string): Promise<UserResponseDto[]> {
    return await this.findUsersService.find(email);
  }
}
