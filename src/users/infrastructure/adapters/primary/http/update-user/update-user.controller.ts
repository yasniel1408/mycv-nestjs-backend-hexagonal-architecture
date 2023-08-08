import { Body, Controller, HttpCode, HttpStatus, Param, Patch } from '@nestjs/common';
import { UpdateRequestDto } from './dto/user.request.dto';
import { UserResponseDto } from './dto/user.response.dto';
import { IUpdateUserController } from '@users/domain/ports/primary/api/update.controller.interface';
import { SerializeResponseDto } from '@shared/infrastructure/decorators/serialize.decorator';
import { UpdateUserService } from '@users/application/update-user/update-user.service';

@Controller('users')
export class UpdateUserController implements IUpdateUserController<UpdateRequestDto, UserResponseDto> {
  constructor(private updateUserService: UpdateUserService) {}

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  async update(@Param('id') id: string, @Body() body: UpdateRequestDto): Promise<UserResponseDto> {
    return this.updateUserService.update(parseInt(id), body);
  }
}
