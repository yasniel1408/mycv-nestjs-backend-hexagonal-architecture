export interface IFindUsersController<Q, R> {
  find(query: Q): Promise<R[]>;
}
