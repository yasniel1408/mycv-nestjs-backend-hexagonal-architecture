import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

describe('AppController', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, { provide: ConfigService, useValue: {} }],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined.', () => {
    expect(service).toBeDefined();
  });
});
