import { ResponseBaseDto } from '@shared/infrastructure/response-base.dto.abstract';
import { Expose } from 'class-transformer';

export class RefreshTokenResponseDto extends ResponseBaseDto {
  @Expose()
  token: string;

  @Expose()
  refreshToken: string;
}
