import { ResponseBaseDto } from '@utils/responseBase.dto.abstract';
import { Expose } from 'class-transformer';

export class UserResponseDto extends ResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
