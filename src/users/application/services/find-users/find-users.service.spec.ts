import { Test } from '@nestjs/testing';
import { FindUsersService } from './find-users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserDao } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao';

describe('FindUsersService', () => {
  let service: FindUsersService;
  const mockRepository = {
    findBy: jest.fn().mockImplementation((dao: UserDao) => {
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
        FindUsersService,
        {
          provide: getRepositoryToken(UserDao),
          useValue: mockRepository,
        },
      ], // Add
    }).compile();

    service = moduleRef.get<FindUsersService>(FindUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
