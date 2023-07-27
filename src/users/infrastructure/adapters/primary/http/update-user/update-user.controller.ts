import { Body, Controller, HttpCode, HttpStatus, Param, Patch } from '@nestjs/common';
import { UpdateRequestDto } from './dto/user.request.dto';
import { UserResponseDto } from './dto/user.response.dto';
import { IUpdateUserController } from '@users/infrastructure/ports/primary/api/update.controller.interface';
import { UpdateUserService } from '@users/application/update-user/update-user.service';
import { SerializeResponseDto } from '@utils/decorators/serialize.decorator';

@Controller('users')
export class UpdateUserController implements IUpdateUserController<UpdateRequestDto, UserResponseDto> {
  constructor(private updateUserService: UpdateUserService) {}

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(UserResponseDto)
  async update(@Param('id') id: string, @Body() body: UpdateRequestDto): Promise<UserResponseDto> {
    return await this.updateUserService.update(parseInt(id), body);
  }
}