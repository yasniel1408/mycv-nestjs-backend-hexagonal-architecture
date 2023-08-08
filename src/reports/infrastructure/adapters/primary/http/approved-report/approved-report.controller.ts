import { Controller, HttpCode, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApprovedReportService } from '@reports/application/approved-report/approved-report.service';
import { IApprovedReportController } from '@reports/domain/ports/primary/http/approved-report.controller.interface';

@Controller('reports')
export class ApprovedReportController implements IApprovedReportController<string, void> {
  constructor(private approvedReportService: ApprovedReportService) {}

  @Patch('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async approvedReport(@Param('id') id: string): Promise<void> {
    this.approvedReportService.approved(parseInt(id));
  }
}
