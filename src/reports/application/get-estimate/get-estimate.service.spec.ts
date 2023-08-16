import { Test } from '@nestjs/testing';
import { GetEstimateService } from './get-estimate.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReportDao } from '@reports/infrastructure/adapters/secondary/db/dao/report.dao';
import { ReportRepository } from '@reports/infrastructure/adapters/secondary/db/report.repository';

describe('GetEstimateService', () => {
  let service: GetEstimateService;
  const mockRepository = {
    findOneBy: jest.fn().mockImplementation((dao: ReportDao) => {
      return Promise.resolve({
        id: Math.ceil(Math.random() * 10),
        ...dao,
      });
    }),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [
        GetEstimateService,
        ReportRepository,
        {
          provide: getRepositoryToken(ReportDao),
          useValue: mockRepository,
        },
      ], // Add
    }).compile();

    service = moduleRef.get<GetEstimateService>(GetEstimateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
