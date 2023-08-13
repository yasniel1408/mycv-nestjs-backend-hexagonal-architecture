export interface IRefreshTokenController {
  refreshToken(header): Promise<void>;
}
