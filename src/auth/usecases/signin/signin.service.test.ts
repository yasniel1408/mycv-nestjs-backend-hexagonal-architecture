import { Test } from '@nestjs/testing';
import { SignInService } from './signin.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<SignInService>(SignInService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
