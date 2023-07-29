import { Test, TestingModule } from '@nestjs/testing';
import { WhoAmIController } from './whoami.controller';

describe('WhoAmIController', () => {
  let controller: WhoAmIController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhoAmIController],
      providers: [],
    }).compile();

    controller = module.get<WhoAmIController>(WhoAmIController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
