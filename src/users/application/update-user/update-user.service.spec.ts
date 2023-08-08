import { Test } from '@nestjs/testing';
import { UpdateUserService } from './update-user.service';
import { UserDao } from '@users/infrastructure/adapters/secondary/db/dao/user.dao';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserRepository } from '@users/infrastructure/adapters/secondary/db/user.repository';

describe('UpdateUserService', () => {
  let service: UpdateUserService;
  const mockRepository = {
    findById: jest.fn().mockImplementation((dao: UserDao) => {
      return Promise.resolve({
        id: Math.ceil(Math.random() * 10),
        ...dao,
      });
    }),
    save: jest.fn().mockImplementation((dao: UserDao) => {
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
        UpdateUserService,
        UserRepository,
        {
          provide: getRepositoryToken(UserDao),
          useValue: mockRepository,
        },
      ], // Add
    }).compile();

    service = moduleRef.get<UpdateUserService>(UpdateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
