export interface IFindOneUserController<P, R> {
  findOneUser(param: P): Promise<R>;
}
