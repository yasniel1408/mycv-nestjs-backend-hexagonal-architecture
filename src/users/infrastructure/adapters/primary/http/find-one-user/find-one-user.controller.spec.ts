import { Test, TestingModule } from '@nestjs/testing';
import { FindOneUserController } from './find-one-user.controller';
import { FindOneUserService } from '@users/application/services/find-one-user/find-one-user.service';

describe('UsersController', () => {
  let controller: FindOneUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneUserController],
      providers: [{ provide: FindOneUserService, useValue: jest.mock }],
    }).compile();

    controller = module.get<FindOneUserController>(FindOneUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
