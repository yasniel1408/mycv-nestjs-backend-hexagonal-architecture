import { Injectable } from '@nestjs/common';
import { ReportRepository } from '@reports/infrastructure/adapters/secondary/db/report.repository';
import { GetEstimateRequestDto } from '@reports/infrastructure/adapters/primary/http/get-estimate/dto/get-estimate.request.dto';
import { GetEstimateResponseDto } from '@reports/infrastructure/adapters/primary/http/get-estimate/dto/get-estimate.response.dto';

@Injectable()
export class GetEstimateService {
  constructor(private reportRepository: ReportRepository) {}

  async getEstimate(query: GetEstimateRequestDto): Promise<GetEstimateResponseDto> {
    const price: GetEstimateResponseDto = await this.reportRepository.getByQueryBuilder(query);
    console.log(price);
    return price;
  }
}
