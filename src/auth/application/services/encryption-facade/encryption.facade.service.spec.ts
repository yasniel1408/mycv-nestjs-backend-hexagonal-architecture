import { Test } from '@nestjs/testing';
import { EncryptionFacadeService } from './encryption.facade.service';
import { ConfigService } from '@nestjs/config';

describe('EncryptionFacadeService', () => {
  let service: EncryptionFacadeService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [EncryptionFacadeService, { provide: ConfigService, useValue: jest.mock }], // Add
    }).compile();

    service = moduleRef.get<EncryptionFacadeService>(EncryptionFacadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
