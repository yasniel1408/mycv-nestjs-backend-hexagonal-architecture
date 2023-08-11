export interface IApprovedReportController<Q, R> {
  approvedReport(params: string, body: Q): Promise<R>;
}
