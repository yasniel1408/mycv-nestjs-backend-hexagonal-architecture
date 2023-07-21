import { Test } from '@nestjs/testing';
import { SingUpService } from './singup.service';

describe('UsersmoduleSpec', () => {
  let service: SingUpService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    service = moduleRef.get<SingUpService>(SingUpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
