import { Body, Controller, HttpCode, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApprovedReportService } from '@reports/application/approved-report/approved-report.service';
import { IApprovedReportController } from '@reports/domain/ports/primary/http/approved-report.controller.interface';
import { ApprovedReportRequestDto } from './dto/approved.request.dto';

@Controller('reports')
export class ApprovedReportController implements IApprovedReportController<ApprovedReportRequestDto, void> {
  constructor(private approvedReportService: ApprovedReportService) {}

  @Patch('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async approvedReport(@Param('id') id: string, @Body() { isApproved }: ApprovedReportRequestDto): Promise<void> {
    this.approvedReportService.changeApproved(parseInt(id), isApproved);
  }
}
