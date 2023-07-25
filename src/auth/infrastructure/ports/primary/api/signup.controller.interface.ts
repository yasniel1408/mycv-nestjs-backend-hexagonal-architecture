export interface IUsersSignUpController<P, R, S> {
  signup(body: P, session: S): Promise<R>;
}
