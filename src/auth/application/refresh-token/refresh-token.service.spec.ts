import { Test } from '@nestjs/testing';
import { RefreshTokenService } from './refresh-token.service';
import { JwtFacadeService } from '../jwt-facade/jwt.facade.service';
import { UserDao } from '@auth/infrastructure/adapters/secondary/db/dao/user.dao';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AuthRepository } from '@auth/infrastructure/adapters/secondary/db/user.repository';
import { EncryptionFacadeService } from '../encryption-facade/encryption.facade.service';
import { ValidateUserService } from '../validate-user/validate-user.service';

describe('RefreshTokenService', () => {
  let service: RefreshTokenService;

  const mockRepository = {
    findOneBy: jest.fn().mockImplementation((dao: UserDao) => {
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
        RefreshTokenService,
        { provide: AuthRepository, useValue: mockRepository },
        {
          provide: EncryptionFacadeService,
          useValue: { compare: async () => true },
        },
        { provide: ValidateUserService, useValue: { validate: async () => ({ id: 1 }) } },
        { provide: getRepositoryToken(UserDao), useValue: mockRepository },
        {
          provide: JwtFacadeService,
          useValue: { createJwtAndRefreshToken: async () => ({ token: 'token', refreshToken: 'refreshToken' }) },
        },
      ], // Add
    }).compile();

    service = moduleRef.get<RefreshTokenService>(RefreshTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
