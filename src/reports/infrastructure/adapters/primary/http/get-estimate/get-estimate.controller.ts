import { Controller, HttpCode, HttpStatus, Patch, Query } from '@nestjs/common';
import { GetEstimateRequestDto } from './dto/get-estimate.request.dto';
import { IGetEstimateController } from '@reports/domain/ports/primary/http/get-estimate.controller.interface';
import { GetEstimateService } from '@reports/application/get-estimate/get-estimate.service';
import { GetEstimateResponseDto } from './dto/get-estimate.response.dto';
import { SerializeResponseDto } from '@shared/infrastructure/decorators/serialize.decorator';

@Controller('reports')
export class GetEstimateController implements IGetEstimateController<GetEstimateRequestDto, GetEstimateResponseDto> {
  constructor(private getEstimateService: GetEstimateService) {}

  @Patch('/')
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(GetEstimateResponseDto)
  async getEstimate(@Query() query: GetEstimateRequestDto): Promise<GetEstimateResponseDto> {
    return this.getEstimateService.getEstimate(query);
  }
}
