import { Test, TestingModule } from '@nestjs/testing';
import { FindUserByIdService } from '@src/users/application/services/find-user-by-id/find-user-by-id.service';
import { UserDao } from '@src/users/infrastructure/adapters/secondary/db/dao/user.dao';
import { FindUserByIdController } from './find-user-by-id.controller';

describe('UsersController', () => {
  let controller: FindUserByIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindUserByIdController],
      providers: [{ provide: FindUserByIdService, useValue: { findOne: async () => ({ id: 1, email: 'test@gmail.com', name: 'Test' } as UserDao) } }],
    }).compile();

    controller = module.get<FindUserByIdController>(FindUserByIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find the user by id', async () => {
    const user = await controller.findUserById('1');
    expect(user.id).toBe(1);
    expect(user.email).toBe('test@gmail.com');
    expect(user.name).toBe('Test');
  });
});
