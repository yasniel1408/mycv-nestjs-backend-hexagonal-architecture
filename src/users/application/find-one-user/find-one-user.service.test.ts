import { Test } from '@nestjs/testing';
import { FindOneUserService } from './find-one-user.service';

describe('FindOneUserService', () => {
  let service: FindOneUserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<FindOneUserService>(FindOneUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
