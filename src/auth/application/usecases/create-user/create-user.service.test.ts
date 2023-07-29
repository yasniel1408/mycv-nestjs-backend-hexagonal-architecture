import { Test } from '@nestjs/testing';
import { CreateUserService } from './create-user.service';

describe('CreateUserService', () => {
  let service: CreateUserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<CreateUserService>(CreateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
