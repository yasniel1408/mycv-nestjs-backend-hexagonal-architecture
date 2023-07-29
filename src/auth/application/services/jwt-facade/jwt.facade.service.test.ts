import { Test } from '@nestjs/testing';
import { JwtFacadeService } from './jwt.facade.service';

describe('JwtFacadeService', () => {
  let service: JwtFacadeService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<JwtFacadeService>(JwtFacadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
