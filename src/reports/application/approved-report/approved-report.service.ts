import { Injectable, NotFoundException } from '@nestjs/common';
import { ReportDao } from '@reports/infrastructure/adapters/secondary/db/dao/report.dao';
import { ReportRepository } from '@reports/infrastructure/adapters/secondary/db/report.repository';

@Injectable()
export class ApprovedReportService {
  constructor(private reportRepository: ReportRepository) {}

  async changeApproved(id: number, isApproved: boolean): Promise<ReportDao> {
    const report = await this.reportRepository.findById(id);

    if (!report) {
      throw new NotFoundException('Report not found!');
    }

    report.approved = isApproved;

    return await this.reportRepository.save(report);
  }
}
