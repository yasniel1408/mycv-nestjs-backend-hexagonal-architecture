import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UserResponseDto } from './dto/user.response.dto';
import { IFindUserByIdController } from '@src/users/domain/ports/primary/api/find-user-by-id.controller.interface';
import { SerializeResponseDto } from '@shared/infrastructure/decorators/serialize.decorator';
import { FindUserByIdService } from '@src/users/application/services/find-user-by-id/find-user-by-id.service';

@Controller('users')
export class FindUserByIdController implements IFindUserByIdController<string, UserResponseDto> {
  constructor(private findUserByIdService: FindUserByIdService) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  async findUserById(@Param('id') id: string): Promise<UserResponseDto> {
    return this.findUserByIdService.find(parseInt(id));
  }
}
