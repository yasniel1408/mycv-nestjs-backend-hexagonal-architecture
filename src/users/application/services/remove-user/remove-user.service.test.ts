import { Test } from '@nestjs/testing';
import { RemoveUserService } from './remove-user.service';

describe('RemoveUserService', () => {
  let service: RemoveUserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<RemoveUserService>(RemoveUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
