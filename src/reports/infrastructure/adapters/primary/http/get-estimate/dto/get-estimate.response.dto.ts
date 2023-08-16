import { Expose } from 'class-transformer';

export class GetEstimateResponseDto {
  @Expose()
  price?: number;
}
