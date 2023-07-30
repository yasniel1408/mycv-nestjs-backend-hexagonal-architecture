import { Test } from '@nestjs/testing';
import { FindOneUserService } from './find-one-user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserDao } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao';

describe('FindOneUserService', () => {
  let service: FindOneUserService;
  const mockRepository = {
    findOneBy: jest.fn().mockImplementation((dao: UserDao) => {
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
        FindOneUserService,
        {
          provide: getRepositoryToken(UserDao),
          useValue: mockRepository,
        },
      ], // Add
    }).compile();

    service = moduleRef.get<FindOneUserService>(FindOneUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
