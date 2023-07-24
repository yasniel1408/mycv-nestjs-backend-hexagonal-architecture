import { Expose } from 'class-transformer';
import { ResponseBaseDto } from '@utils/responseBase.dto.abstract';

export class UserResponseDto extends ResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
