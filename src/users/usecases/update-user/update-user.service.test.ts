import { Test } from '@nestjs/testing';
import { UpdateUserService } from './update-user.service';

describe('UpdateUserService', () => {
  let service: UpdateUserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<UpdateUserService>(UpdateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
