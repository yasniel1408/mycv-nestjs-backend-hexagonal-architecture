import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SerializeResponseDto } from '@shared/infrastructure/decorators/serialize.decorator';
import { ICreateReportController } from '@reports/domain/ports/primary/http/create-report.controller.interface';
import { CreateReportRequestDto } from './dto/report.request.dto';
import { CreatedReportRequestDto } from './dto/report.response.dto';
import { CreateReportService } from '@reports/application/create-report/create-report.service';
import { CurrentUser } from '@shared/infrastructure/decorators/current.user.decorator';

@Controller('reports')
export class CreateReportController implements ICreateReportController<CreateReportRequestDto, CreatedReportRequestDto> {
  constructor(private createReportService: CreateReportService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @SerializeResponseDto(CreatedReportRequestDto)
  async create(@Body() body: CreateReportRequestDto, @CurrentUser() user): Promise<CreatedReportRequestDto> {
    return this.createReportService.create(body, user);
  }
}
