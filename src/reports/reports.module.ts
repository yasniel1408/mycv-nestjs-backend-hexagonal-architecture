import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportDao } from './infrastructure/adapters/secondary/db/dao/report.dao';
import { CreateReportController } from './infrastructure/adapters/primary/http/create-report/create-report.controller';
import { CreateReportService } from './application/create-report/create-report.service';
import { ReportRepository } from './infrastructure/adapters/secondary/db/report.repository';
import { ApprovedReportController } from './infrastructure/adapters/primary/http/approved-report/approved-report.controller';
import { ApprovedReportService } from './application/approved-report/approved-report.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReportDao])],
  providers: [CreateReportService, ReportRepository, ApprovedReportService],
  controllers: [CreateReportController, ApprovedReportController],
})
export class ReportsModule {}
