export interface IUsersSignInController<P, R> {
  signin(body: P): Promise<R>;
}
