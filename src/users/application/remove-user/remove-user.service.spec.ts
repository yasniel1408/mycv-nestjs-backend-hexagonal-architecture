import { Test } from '@nestjs/testing';
import { RemoveUserService } from './remove-user.service';
import { UserDao } from '@users/infrastructure/adapters/secondary/db/dao/user.dao';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserRepository } from '@users/infrastructure/adapters/secondary/db/user.repository';

describe('RemoveUserService', () => {
  let service: RemoveUserService;
  const mockRepository = {
    findById: jest.fn().mockImplementation((dao: UserDao) => {
      return Promise.resolve({
        id: Math.ceil(Math.random() * 10),
        ...dao,
      });
    }),
    remove: jest.fn().mockImplementation((dao: UserDao) => {
      return Promise.resolve({
        id: Math.ceil(Math.random() * 10),
        ...dao,
      });
    }),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [
        RemoveUserService,
        UserRepository,
        {
          provide: getRepositoryToken(UserDao),
          useValue: mockRepository,
        },
      ], // Add
    }).compile();

    service = moduleRef.get<RemoveUserService>(RemoveUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
