import { Test, TestingModule } from '@nestjs/testing';
import { SignOutController } from './signout.controller';

describe('SignOutController', () => {
  let controller: SignOutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignOutController],
      providers: [],
    }).compile();

    controller = module.get<SignOutController>(SignOutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
