import { Test, TestingModule } from '@nestjs/testing';
import { GetEstimateController } from './get-estimate.controller';
import { GetEstimateService } from '@reports/application/get-estimate/get-estimate.service';

describe('GetEstimateController', () => {
  let controller: GetEstimateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetEstimateController],
      providers: [
        {
          provide: GetEstimateService,
          useValue: {
            getEstimate: async () => ({
              price: 1000,
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<GetEstimateController>(GetEstimateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
