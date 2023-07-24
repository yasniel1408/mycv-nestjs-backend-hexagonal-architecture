import { Test, TestingModule } from '@nestjs/testing';
import { UsersSingUpController } from './users.signup.controller';
import { SignUpService } from '@auth/usecases/signup/signup.service';

describe('UsersController', () => {
  let controller: UsersSingUpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersSingUpController],
      providers: [{ provide: SignUpService, useValue: jest.mock }],
    }).compile();

    controller = module.get<UsersSingUpController>(UsersSingUpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
