import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportEntity } from './infrastructure/adapters/secondary/sqlite/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReportEntity])],
})
export class ReportsModule {}
