import { FindManyOptions, RemoveOptions, Repository, SaveOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ReportDao } from './dao/report.dao';
import { IReportRepositoryInterface } from '@reports/domain/ports/secondary/db/user.repository.interface';

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

  // Estimado Promedio de precio de un auto
  getByQueryBuilder(query: Partial<ReportDao>): Promise<any> {
    return this.repository
      .createQueryBuilder()
      .select('AVG(price)', 'price')
      .where('make=:make', { make: query.make })
      .orWhere('model=:model', { model: query.model })
      .orWhere('year - :year', { year: query.year })
      .orWhere('lng - :lng BETWEEN -5 AND +5', { lng: query.lng })
      .orWhere('lat - :lat BETWEEN -3 AND +3', { lat: query.lat })
      .andWhere('approved IS TRUE')
      .orderBy('ABS(mileage - :mileage)', 'DESC')
      .setParameters({ mileage: query.mileage }) // esto es por el orderBy
      .limit(3)
      .getRawOne();
  }
}
