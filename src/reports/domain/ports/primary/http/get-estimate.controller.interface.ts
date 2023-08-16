export interface IGetEstimateController<Q, R> {
  getEstimate(query: Q): Promise<R>;
}
