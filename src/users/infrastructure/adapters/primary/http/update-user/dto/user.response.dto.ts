import { ResponseBaseDto } from '@utils/response-base.dto.abstract';
import { Expose } from 'class-transformer';
export class UserResponseDto extends ResponseBaseDto {
  @Expose()
  email: string;
}
