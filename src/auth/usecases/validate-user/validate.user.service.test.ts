import { Test } from '@nestjs/testing';
import { ValidateUserService } from './validate-user.service';

describe('ValidateUserService', () => {
  let service: ValidateUserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<ValidateUserService>(ValidateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
