import { ResponseBaseDto } from '@shared/infrastructure/response-base.dto.abstract';
import { Expose } from 'class-transformer';

export class UserResponseDto extends ResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  name?: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt?: Date;

  @Expose()
  reports?: { id: number; make: string; model: string; year: number }[];
}
