import { Test, TestingModule } from '@nestjs/testing';
import { RefreshTokenController } from './refresh-token.controller';
import { JwtFacadeService } from '@auth/application/jwt-facade/jwt.facade.service';

describe('RefreshTokenController', () => {
  let controller: RefreshTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefreshTokenController],
      providers: [
        {
          provide: JwtFacadeService,
          useValue: { createJwtAndRefreshToken: async () => ({ token: '', refreshToken: '' }) },
        },
      ],
    }).compile();

    controller = module.get<RefreshTokenController>(RefreshTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
