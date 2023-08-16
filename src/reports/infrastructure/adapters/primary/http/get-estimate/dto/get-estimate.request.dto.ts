import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class GetEstimateRequestDto {
  @IsString()
  make?: string;

  @IsString()
  model?: string;

  @Transform(({ value }) => parseInt(value))
  year?: number;

  @Transform(({ value }) => parseInt(value))
  mileage?: number;

  @Transform(({ value }) => parseFloat(value))
  lng?: number;

  @Transform(({ value }) => parseFloat(value))
  lat?: number;
}
