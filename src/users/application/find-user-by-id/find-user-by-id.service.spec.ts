import { Test } from '@nestjs/testing';
import { FindUserByIdService } from './find-user-by-id.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserDao } from '@users/infrastructure/adapters/secondary/db/dao/user.dao';
import { UserRepository } from '@users/infrastructure/adapters/secondary/db/user.repository';

describe('FindUserByIdService', () => {
  let service: FindUserByIdService;
  const mockRepository = {
    findById: jest.fn().mockImplementation((dao: UserDao) => {
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
        FindUserByIdService,
        UserRepository,
        {
          provide: getRepositoryToken(UserDao),
          useValue: mockRepository.findById(),
        },
      ], // Add
    }).compile();

    service = moduleRef.get<FindUserByIdService>(FindUserByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
