import { ResponseBaseDto } from '@utils/response-base.dto.abstract';
import { Expose } from 'class-transformer';

export class SignInResponseDto extends ResponseBaseDto {
  @Expose()
  token: string;
}
