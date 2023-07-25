import { Test } from '@nestjs/testing';
import { FindByEmailService } from './find-by-email.service';

describe('FindByEmailService', () => {
  let service: FindByEmailService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<FindByEmailService>(FindByEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
