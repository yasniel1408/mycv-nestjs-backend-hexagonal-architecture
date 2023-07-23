import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { UserResponseDto } from './dto/user.response.dto';
import { FindUsersService } from '@users/usecases/find-users/find-users.service';
import { IFindUsersController } from '@users/infrastructure/ports/primary/api/find-users.controller.interface';

@Controller('users')
export class FindUsersController implements IFindUsersController<string, UserResponseDto> {
  constructor(private findOneUserService: FindUsersService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async find(@Query('email') email: string): Promise<UserResponseDto[]> {
    return await this.findOneUserService.find(email);
  }
}
