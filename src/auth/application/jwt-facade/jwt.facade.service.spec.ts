import { Test } from '@nestjs/testing';
import { JwtFacadeService } from './jwt.facade.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from '@auth/infrastructure/adapters/secondary/db/user.repository';
import { UserDao } from '@auth/infrastructure/adapters/secondary/db/dao/user.dao';

describe('JwtFacadeService', () => {
  let service: JwtFacadeService;

  const mockRepository = {
    findOneBy: jest.fn().mockImplementation((dao: UserDao) => {
      return Promise.resolve({
        id: Math.ceil(Math.random() * 10),
        ...dao,
      });
    }),
    findByEmail: jest.fn().mockImplementation((dao: UserDao) => {
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
        JwtFacadeService,
        JwtService,
        { provide: ConfigService, useValue: jest.mock },
        { provide: AuthRepository, useValue: mockRepository },
      ], // Add
    }).compile();

    service = moduleRef.get<JwtFacadeService>(JwtFacadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
