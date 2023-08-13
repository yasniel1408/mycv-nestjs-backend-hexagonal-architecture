import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtFacadeService } from '../jwt-facade/jwt.facade.service';
import { AuthRepository } from '@auth/infrastructure/adapters/secondary/db/user.repository';

@Injectable()
export class RefreshTokenService {
  constructor(private jwtFacadeService: JwtFacadeService, private userRepository: AuthRepository) {}

  async refreshTokens(email: string, refreshToken: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user && !user.refreshToken) throw new ForbiddenException('Access Denied');

    await this.jwtFacadeService.verifyToken(refreshToken);

    const refreshTokenMatches = refreshToken === user.refreshToken;
    if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');

    const { token, refreshToken: newRefreshToken } = await this.jwtFacadeService.createJwtAndRefreshToken(user);

    Object.assign(user, { refreshToken: newRefreshToken }); // le asignamos lo que esta en attrs a lo que esta en user

    await this.userRepository.save(user);

    return { token, refreshToken: newRefreshToken };
  }
}
