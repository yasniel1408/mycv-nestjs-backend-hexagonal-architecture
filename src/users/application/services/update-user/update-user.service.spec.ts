import { Test } from '@nestjs/testing';
import { UpdateUserService } from './update-user.service';
import { UserDao } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UpdateUserService', () => {
  let service: UpdateUserService;
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
        UpdateUserService,
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
