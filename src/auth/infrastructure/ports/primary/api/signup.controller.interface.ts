export interface IUsersSignUpController<P, R> {
  signup(body: P): Promise<R>;
}
