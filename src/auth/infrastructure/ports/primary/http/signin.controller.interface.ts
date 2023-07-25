export interface IUsersSignInController<P, R> {
  signin(body: P): Promise<{ user: R; access_token: string }>;
}
