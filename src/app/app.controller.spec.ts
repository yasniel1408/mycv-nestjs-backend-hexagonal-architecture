import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      providers: [{ provide: AppService, useValue: { getVersion: () => {} } }],
    }).compile();

    controller = app.get<AppController>(AppController);
  });

  it('should be defined.', () => {
    expect(controller).toBeDefined();
  });
});
