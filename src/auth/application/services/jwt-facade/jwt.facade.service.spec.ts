import { Test } from '@nestjs/testing';
import { JwtFacadeService } from './jwt.facade.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

describe('JwtFacadeService', () => {
  let service: JwtFacadeService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [JwtFacadeService, JwtService, { provide: ConfigService, useValue: jest.mock }], // Add
    }).compile();

    service = moduleRef.get<JwtFacadeService>(JwtFacadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
