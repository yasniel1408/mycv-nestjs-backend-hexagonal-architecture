import { Test } from '@nestjs/testing';
import { CreateReportService } from './create-report.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReportDao } from '@src/reports/infrastructure/adapters/secondary/db/dao/report.dao';

describe('CreateReportService', () => {
  let service: CreateReportService;
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
        CreateReportService,
        {
          provide: getRepositoryToken(ReportDao),
          useValue: mockRepository,
        },
      ], // Add
    }).compile();

    service = moduleRef.get<CreateReportService>(CreateReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
