export interface ICreateReportController<Q, R> {
  create(body: Q, user): Promise<R>;
}
