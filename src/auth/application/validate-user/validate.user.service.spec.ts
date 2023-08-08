import { Test } from '@nestjs/testing';
import { ValidateUserService } from './validate-user.service';
import { UserDao } from '@auth/infrastructure/adapters/secondary/db/dao/user.dao';
import { EncryptionFacadeService } from '../encryption-facade/encryption.facade.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AuthRepository } from '@auth/infrastructure/adapters/secondary/db/user.repository';

describe('ValidateUserService', () => {
  let service: ValidateUserService;
  const userMock = { id: 1, email: 'test@gmail.com', password: 'test' } as UserDao;

  const mockRepository = {
    findOneBy: jest.fn().mockImplementation(() => {
      return Promise.resolve(userMock);
    }),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [
        ValidateUserService,
        AuthRepository,
        { provide: getRepositoryToken(UserDao), useValue: mockRepository },
        {
          provide: EncryptionFacadeService,
          useValue: { compare: async () => true },
        },
      ], // Add
    }).compile();

    service = moduleRef.get<ValidateUserService>(ValidateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should validate user by email and password', async () => {
    const result = await service.validate('test@gmail.com', 'test');
    expect(result.id).toBe(userMock.id);
  });

  it('should throw error if not find user', async () => {
    try {
      await service.validate('test@gmail.com', 'test');
    } catch (error) {
      expect(error.message).toBe('Invalid email or password');
    }
  });

  it('should throw error if not return true compare passwords', async () => {
    jest.spyOn(service['encryptionFacadeService'], 'compare').mockImplementation(async () => false);
    try {
      await service.validate('test@gmail.com', 'test');
    } catch (error) {
      expect(error.message).toBe('Invalid email or password');
    }
  });
});
