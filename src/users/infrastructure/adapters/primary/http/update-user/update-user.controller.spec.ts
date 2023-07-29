import { Test, TestingModule } from '@nestjs/testing';
import { UpdateUserController } from './update-user.controller';
import { UpdateUserService } from '@users/application/services/update-user/update-user.service';

describe('UsersController', () => {
  let controller: UpdateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateUserController],
      providers: [{ provide: UpdateUserService, useValue: jest.mock }],
    }).compile();

    controller = module.get<UpdateUserController>(UpdateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
