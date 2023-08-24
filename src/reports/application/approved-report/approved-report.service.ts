import { Injectable, NotFoundException } from '@nestjs/common';
import { ReportDao } from '@reports/infrastructure/adapters/secondary/db/dao/report.dao';
import { ReportRepository } from '@reports/infrastructure/adapters/secondary/db/report.repository';
import { Report } from '@src/reports/domain/entity/report';
import { User } from '@src/reports/domain/entity/user';
import { EmailValueObject } from '@src/shared/domain/value-objects/email.value.object';

@Injectable()
export class ApprovedReportService {
  constructor(private reportRepository: ReportRepository) {}

  async changeApproved(id: number, isApproved: boolean): Promise<ReportDao> {
    const reportDao = await this.reportRepository.findById(id);

    if (!reportDao) {
      throw new NotFoundException('Report not found!');
    }

    const user = new User(reportDao.user.id, new EmailValueObject(reportDao.user.email), reportDao.user.name);

    const report = new Report(reportDao.price, reportDao.make, reportDao.year);
    report.setOptionalFields(reportDao.model, reportDao.lng, reportDao.lat, reportDao.mileage);
    report.setUser(user);
    report.setApproved(isApproved);

    return await this.reportRepository.save(report.toJSON() as ReportDao);
  }
}
