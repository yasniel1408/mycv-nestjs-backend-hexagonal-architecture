import { ResponseBaseDto } from '@shared/infrastructure/response-base.dto.abstract';
import { Expose } from 'class-transformer';

export class UserResponseDto extends ResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  name?: string;
}
