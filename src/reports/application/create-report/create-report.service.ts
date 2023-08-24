import { Injectable } from '@nestjs/common';
import { ReportDao } from '@reports/infrastructure/adapters/secondary/db/dao/report.dao';
import { ReportRepository } from '@reports/infrastructure/adapters/secondary/db/report.repository';
import { CreateReportRequestDto } from '@reports/infrastructure/adapters/primary/http/create-report/dto/report.request.dto';
import { Report } from '@reports/domain/entity/report';

@Injectable()
export class CreateReportService {
  constructor(private reportRepository: ReportRepository) {}

  async create(reportDto: CreateReportRequestDto, user): Promise<ReportDao> {
    const report = new Report(reportDto.price, reportDto.make, reportDto.year);
    report.setOptionalFields(reportDto.model, reportDto.lng, reportDto.lat, reportDto.mileage);
    report.setUser(user);
    report.setApproved(false);

    const reportCreated = this.reportRepository.create(report.toJSON() as ReportDao);
    reportCreated.userId = user.userId;
    return await this.reportRepository.save(reportCreated);
  }
}
