import { Test, TestingModule } from '@nestjs/testing';
import { UpdateUserController } from './update-user.controller';
import { UserDao } from '@users/infrastructure/adapters/secondary/db/dao/user.dao';
import { UpdateUserService } from '@users/application/update-user/update-user.service';

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
