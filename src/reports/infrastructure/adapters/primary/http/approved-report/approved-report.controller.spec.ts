import { Test, TestingModule } from '@nestjs/testing';
import { ApprovedReportController } from './approved-report.controller';
import { ApprovedReportService } from '@reports/application/approved-report/approved-report.service';

describe('ApprovedReportController', () => {
  let controller: ApprovedReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApprovedReportController],
      providers: [
        {
          provide: ApprovedReportService,
          useValue: {
            approved: async () => {
              return;
            },
          },
        },
      ],
    }).compile();

    controller = module.get<ApprovedReportController>(ApprovedReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
