import { Test, TestingModule } from '@nestjs/testing';
import { SingUpController } from './signup.controller';
import { SignUpService } from '@auth/usecases/signup/signup.service';

describe('UsersController', () => {
  let controller: SingUpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SingUpController],
      providers: [{ provide: SignUpService, useValue: jest.mock }],
    }).compile();

    controller = module.get<SingUpController>(SingUpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
