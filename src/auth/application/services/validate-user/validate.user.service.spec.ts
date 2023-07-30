import { Test } from '@nestjs/testing';
import { ValidateUserService } from './validate-user.service';
import { FindByEmailService } from '../find-by-email/find-by-email.service';
import { UserDao } from '@auth/infrastructure/adapters/secondary/typeorm/dao/user.dao';
import { EncryptionFacadeService } from '../encryption-facade/encryption.facade.service';

describe('ValidateUserService', () => {
  let service: ValidateUserService;
  const userMock = { id: 1, email: 'test@gmail.com', password: 'test' } as UserDao;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [
        ValidateUserService,
        { provide: FindByEmailService, useValue: { find: async () => userMock } },
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
    expect(result).toBe(userMock);
  });

  it('should throw error if not find user', async () => {
    jest.spyOn(service['findByEmailService'], 'find').mockImplementation(async () => null);
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
