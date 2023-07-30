import { Test } from '@nestjs/testing';
import { SignInService } from './signin.service';
import { ValidateUserService } from '../validate-user/validate-user.service';
import { JwtFacadeService } from '../jwt-facade/jwt.facade.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [
        SignInService,
        { provide: ValidateUserService, useValue: { validate: async () => true } },
        {
          provide: JwtFacadeService,
          useValue: { createJwt: async () => 'token' },
        },
      ], // Add
    }).compile();

    service = moduleRef.get<SignInService>(SignInService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return token', async () => {
    const result = await service.signin('test@gmail.com', 'test');
    expect(result).toBe('token');
  });
});
