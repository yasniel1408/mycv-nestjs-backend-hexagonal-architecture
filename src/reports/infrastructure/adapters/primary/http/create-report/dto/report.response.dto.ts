import { Expose } from 'class-transformer';

export class CreatedReportRequestDto {
  @Expose()
  id: number;

  @Expose()
  make: string;

  @Expose()
  model: string;

  @Expose()
  approved: boolean;

  @Expose()
  userId: number;
}
