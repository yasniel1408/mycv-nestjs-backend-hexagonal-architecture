import { Test } from '@nestjs/testing';
import { FindUsersService } from './find-users.service';

describe('FindUsersService', () => {
  let service: FindUsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<FindUsersService>(FindUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
