export interface IRefreshTokenController<R> {
  refreshToken(user, request: { refreshToken: string }): Promise<R>;
}
