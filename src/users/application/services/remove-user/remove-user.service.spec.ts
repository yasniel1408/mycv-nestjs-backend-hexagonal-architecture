import { Test } from '@nestjs/testing';
import { RemoveUserService } from './remove-user.service';
import { UserDao } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('RemoveUserService', () => {
  let service: RemoveUserService;
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
        RemoveUserService,
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
