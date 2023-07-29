import { Test, TestingModule } from '@nestjs/testing';
import { FindOneUserController } from './find-one-user.controller';
import { FindOneUserService } from '@users/application/services/find-one-user/find-one-user.service';
import { UserDao } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao';

describe('UsersController', () => {
  let controller: FindOneUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneUserController],
      providers: [{ provide: FindOneUserService, useValue: { findOne: async () => ({ id: 1, email: 'test@gmail.com', name: 'Test' } as UserDao) } }],
    }).compile();

    controller = module.get<FindOneUserController>(FindOneUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find the user by id', async () => {
    const user = await controller.findOneUser('1');
    expect(user.id).toBe(1);
    expect(user.email).toBe('test@gmail.com');
    expect(user.name).toBe('Test');
  });
});
