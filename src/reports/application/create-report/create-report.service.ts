import { Injectable } from '@nestjs/common';
import { ReportDao } from '@reports/infrastructure/adapters/secondary/db/dao/report.dao';
import { ReportRepository } from '@reports/infrastructure/adapters/secondary/db/report.repository';
import { CreateReportRequestDto } from '@reports/infrastructure/adapters/primary/http/create-report/dto/report.request.dto';

@Injectable()
export class CreateReportService {
  constructor(private reportRepository: ReportRepository) {}

  async create(reportDto: CreateReportRequestDto, user): Promise<ReportDao> {
    const reportCreated = this.reportRepository.create(reportDto as ReportDao);
    reportCreated.userId = user.userId;
    return await this.reportRepository.save(reportCreated);
  }
}
