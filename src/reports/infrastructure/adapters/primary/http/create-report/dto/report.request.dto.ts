import { IsLatitude, IsLongitude, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReportRequestDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;

  @IsNumber()
  @Min(0)
  @Max(1000000)
  mileage: number;

  @IsLongitude()
  lng: number;

  @IsLatitude()
  lat: number;

  @IsNumber()
  @Min(0)
  @Max(1000000)
  price: number;
}
