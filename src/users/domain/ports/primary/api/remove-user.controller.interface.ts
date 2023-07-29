export interface IRemoveUserController<P, R> {
  remove(param: P): Promise<R>;
}
