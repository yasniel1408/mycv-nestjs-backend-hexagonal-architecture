import { Test, TestingModule } from '@nestjs/testing';
import { CreateReportController } from './create-report.controller';
import { CreateReportService } from '@reports/application/create-report/create-report.service';

describe('CreateReportController', () => {
  let controller: CreateReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateReportController],
      providers: [
        {
          provide: CreateReportService,
          useValue: { create: async () => [{ id: 1, email: 'test@gmail.com', name: 'Test' }] },
        },
      ],
    }).compile();

    controller = module.get<CreateReportController>(CreateReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
