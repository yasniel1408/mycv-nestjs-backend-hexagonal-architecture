import { Test, TestingModule } from '@nestjs/testing';
import { WhoAmIController } from './whoami.controller';
import { FindOneUserService } from '@users/usecases/find-one-user/find-one-user.service';

describe('WhoAmIController', () => {
  let controller: WhoAmIController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhoAmIController],
      providers: [{ provide: FindOneUserService, useValue: jest.mock }],
    }).compile();

    controller = module.get<WhoAmIController>(WhoAmIController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
