import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UserResponseDto } from './dto/user.response.dto';
import { IFindOneUserController } from '@users/domain/ports/primary/api/find-one-user.controller.interface';
import { SerializeResponseDto } from '@shared/infrastructure/decorators/serialize.decorator';
import { FindOneUserService } from '@users/application/services/find-one-user/find-one-user.service';

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
