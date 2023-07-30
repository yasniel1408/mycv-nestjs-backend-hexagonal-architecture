import { Test } from '@nestjs/testing';
import { FindByEmailService } from './find-by-email.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserDao } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao';

describe('FindByEmailService', () => {
  let service: FindByEmailService;
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
        FindByEmailService,
        {
          provide: getRepositoryToken(UserDao),
          useValue: mockRepository,
        },
      ], // Add
    }).compile();

    service = moduleRef.get<FindByEmailService>(FindByEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
