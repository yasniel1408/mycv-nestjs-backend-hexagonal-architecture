import { ResponseBaseDto } from '@utils/responseBase.dto.abstract';
import { Expose } from 'class-transformer';

export class SignInResponseDto extends ResponseBaseDto {
  @Expose()
  token: string;
}
