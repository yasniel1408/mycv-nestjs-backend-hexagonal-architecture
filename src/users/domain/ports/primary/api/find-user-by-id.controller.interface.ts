export interface IFindUserByIdController<P, R> {
  findUserById(param: P): Promise<R>;
}
