export interface IUsersSignInController<P, R, S> {
  signin(body: P, session: S): Promise<R>;
}
