import { Test, TestingModule } from '@nestjs/testing';
import { SignInController } from './signin.controller';
import { SignInService } from '@auth/application/signin/signin.service';

describe('SignInController', () => {
  let controller: SignInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignInController],
      providers: [{ provide: SignInService, useValue: jest.mock }],
    }).compile();

    controller = module.get<SignInController>(SignInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
