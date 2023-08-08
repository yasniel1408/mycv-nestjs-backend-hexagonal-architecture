import { FindManyOptions, RemoveOptions, Repository, SaveOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ReportDao } from './dao/report.dao';
import { IReportRepositoryInterface } from '@src/reports/domain/ports/secondary/db/user.repository.interface';

@Injectable()
export class ReportRepository implements IReportRepositoryInterface<ReportDao> {
  constructor(
    @InjectRepository(ReportDao)
    private repository: Repository<ReportDao>,
  ) {}

  create(data: ReportDao): ReportDao {
    return this.repository.create(data);
  }

  save(entity: ReportDao, options?: SaveOptions): Promise<ReportDao> {
    return this.repository.save(entity, options);
  }

  find(options?: FindManyOptions<ReportDao>): Promise<ReportDao[]> {
    return this.repository.find(options);
  }

  findById(id: number): Promise<ReportDao | null> {
    return this.repository.findOneBy({ id });
  }

  remove(entity: ReportDao, options?: RemoveOptions): Promise<ReportDao> {
    return this.repository.remove(entity, options);
  }
}
