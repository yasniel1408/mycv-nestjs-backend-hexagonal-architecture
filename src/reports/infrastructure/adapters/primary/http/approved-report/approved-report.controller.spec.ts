import { Test, TestingModule } from '@nestjs/testing';
import { ApprovedReportController } from './approved-report.controller';

describe('ApprovedReportController', () => {
  let controller: ApprovedReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApprovedReportController],
      // providers: [{ provide: FindUsersService, useValue: { find: async () => [{ id: 1, email: 'test@gmail.com', name: 'Test' }] as UserDao[] } }],
    }).compile();

    controller = module.get<ApprovedReportController>(ApprovedReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
