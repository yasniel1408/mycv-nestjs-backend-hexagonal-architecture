import { Test, TestingModule } from '@nestjs/testing';
import { UsersSignInController } from './users.signin.controller';
import { SignInService } from '@auth/usecases/signin/signin.service';

describe('UsersSignInController', () => {
  let controller: UsersSignInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersSignInController],
      providers: [{ provide: SignInService, useValue: jest.mock }],
    }).compile();

    controller = module.get<UsersSignInController>(UsersSignInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
