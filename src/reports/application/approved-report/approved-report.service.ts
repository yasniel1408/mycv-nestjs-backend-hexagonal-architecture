import { Injectable, NotFoundException } from '@nestjs/common';
import { ReportDao } from '@reports/infrastructure/adapters/secondary/db/dao/report.dao';
import { ReportRepository } from '@reports/infrastructure/adapters/secondary/db/report.repository';

@Injectable()
export class ApprovedReportService {
  constructor(private reportRepository: ReportRepository) {}

  async approved(id: number): Promise<ReportDao> {
    console.log(id);

    const report = await this.reportRepository.findById(id);

    if (!report) {
      throw new NotFoundException('Report not found!');
    }

    report.approved = true;

    return await this.reportRepository.save(report);
  }
}
