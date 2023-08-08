import { Test } from '@nestjs/testing';
import { SignUpService } from './signup.service';

describe('SignUpService', () => {
  let service: SignUpService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<SignUpService>(SignUpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
