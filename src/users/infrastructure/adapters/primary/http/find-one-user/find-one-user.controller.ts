import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UserResponseDto } from './dto/user.response.dto';
import { FindOneUserService } from '@users/application/find-one-user/find-one-user.service';
import { IFindOneUserController } from '@users/infrastructure/ports/primary/api/find-one-user.controller.interface';
import { SerializeResponseDto } from '@utils/decorators/serialize.decorator';

@Controller('users')
export class FindOneUserController implements IFindOneUserController<string, UserResponseDto> {
  constructor(private findOneUserService: FindOneUserService) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  async findOneUser(@Param('id') id: string): Promise<UserResponseDto> {
    return this.findOneUserService.findOne(parseInt(id));
  }
}
