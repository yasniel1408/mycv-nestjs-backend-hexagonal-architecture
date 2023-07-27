import { Test } from '@nestjs/testing';
import { EncryptionFacadeService } from './encryption.facade.service';

describe('EncryptionFacadeService', () => {
  let service: EncryptionFacadeService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<EncryptionFacadeService>(EncryptionFacadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
