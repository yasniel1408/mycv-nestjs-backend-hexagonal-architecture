import { Test, TestingModule } from '@nestjs/testing';
import { CreateReportController } from './create-report.controller';

describe('CreateReportController', () => {
  let controller: CreateReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateReportController],
      // providers: [{ provide: FindUsersService, useValue: { find: async () => [{ id: 1, email: 'test@gmail.com', name: 'Test' }] as UserDao[] } }],
    }).compile();

    controller = module.get<CreateReportController>(CreateReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
