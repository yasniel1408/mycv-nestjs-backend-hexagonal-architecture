import { Test, TestingModule } from '@nestjs/testing';
import { FindUsersController } from './find-users.controller';
import { FindUsersService } from '@users/application/find-users/find-users.service';

describe('FindUsersController', () => {
  let controller: FindUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindUsersController],
      providers: [{ provide: FindUsersService, useValue: jest.mock }],
    }).compile();

    controller = module.get<FindUsersController>(FindUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
