import { Controller, Delete, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UserResponseDto } from './dto/user.response.dto';
import { IRemoveUserController } from '@users/domain/ports/primary/api/remove-user.controller.interface';
import { SerializeResponseDto } from '@shared/infrastructure/decorators/serialize.decorator';
import { RemoveUserService } from '@users/application/remove-user/remove-user.service';

@Controller('users')
export class RemoveUserController implements IRemoveUserController<string, UserResponseDto> {
  constructor(private removeUserService: RemoveUserService) {}

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  async remove(@Param('id') id: string): Promise<UserResponseDto> {
    return this.removeUserService.remove(parseInt(id));
  }
}
