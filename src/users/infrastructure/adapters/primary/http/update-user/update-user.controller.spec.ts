import { Test, TestingModule } from '@nestjs/testing';
import { UpdateUserController } from './update-user.controller';
import { UpdateUserService } from '@users/application/services/update-user/update-user.service';
import { UserDao } from '@src/users/infrastructure/adapters/secondary/db/dao/user.dao';

describe('UsersController', () => {
  let controller: UpdateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateUserController],
      providers: [{ provide: UpdateUserService, useValue: { update: async () => ({ id: 1, email: 'test@gmail.com', name: 'Test' } as UserDao) } }],
    }).compile();

    controller = module.get<UpdateUserController>(UpdateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should remove an user', async () => {
    const user = await controller.update('1', { email: 'test@gmail.com', name: 'Test' });
    expect(user.email).toBe('test@gmail.com');
    expect(user.name).toBe('Test');
  });
});
