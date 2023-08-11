import { IsBoolean, IsNotEmpty } from 'class-validator';

export class ApprovedReportRequestDto {
  @IsBoolean()
  @IsNotEmpty()
  isApproved: boolean;
}
