import { Test, TestingModule } from '@nestjs/testing';
import { RemoveUserController } from './remove-user.controller';
import { RemoveUserService } from '@users/application/services/remove-user/remove-user.service';

describe('RemoveUserController', () => {
  let controller: RemoveUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemoveUserController],
      providers: [{ provide: RemoveUserService, useValue: jest.mock }],
    }).compile();

    controller = module.get<RemoveUserController>(RemoveUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
