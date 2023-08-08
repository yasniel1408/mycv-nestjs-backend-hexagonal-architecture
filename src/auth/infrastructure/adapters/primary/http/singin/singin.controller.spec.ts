import { Test, TestingModule } from '@nestjs/testing';
import { SignInController } from './signin.controller';
import { SignInService } from '@auth/application/signin/signin.service';

describe('SignInController', () => {
  let controller: SignInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignInController],
      providers: [{ provide: SignInService, useValue: { signin: async () => 'token' } }],
    }).compile();

    controller = module.get<SignInController>(SignInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should singin user', async () => {
    const response = await controller.signin({ email: 'test@gmail.com', password: 'test' });
    expect(response).toEqual({ token: 'token' });
  });
});
