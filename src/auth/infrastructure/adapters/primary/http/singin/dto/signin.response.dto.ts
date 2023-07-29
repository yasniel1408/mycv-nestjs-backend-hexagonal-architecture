import { ResponseBaseDto } from '@shared/infrastructure/response-base.dto.abstract';
import { Expose } from 'class-transformer';

export class SignInResponseDto extends ResponseBaseDto {
  @Expose()
  token: string;
}
