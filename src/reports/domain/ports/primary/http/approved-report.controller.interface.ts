export interface IApprovedReportController<Q, R> {
  approvedReport(params: Q): Promise<R>;
}
