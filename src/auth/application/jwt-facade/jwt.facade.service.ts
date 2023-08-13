import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from '@auth/infrastructure/adapters/secondary/db/user.repository';

@Injectable()
export class JwtFacadeService {
  constructor(
    private jwtService: JwtService,
    private readonly configService: ConfigService,
    private userRepository: AuthRepository,
  ) {}

  async refreshTokens(email: string, refreshToken: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user && !user.refreshToken) throw new ForbiddenException('Access Denied');

    try {
      await this.jwtService.verifyAsync(refreshToken, { secret: this.configService.getOrThrow<string>('JWT_KEY') });
    } catch (error) {
      throw new ForbiddenException('Access Denied');
    }

    const refreshTokenMatches = refreshToken === user.refreshToken;
    if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');

    return await this.createJwtAndRefreshToken(user);
  }

  async createJwtAndRefreshToken(user) {
    const token = await this.createJwt(user, '1m');

    const refreshToken = await this.createJwt(user, '30d');

    return { token, refreshToken };
  }

  async createJwt(user: any, expiresIn: string): Promise<string> {
    const payload = { sub: user.id, email: user.email, isAdmin: user.isAdmin };

    return await this.jwtService.signAsync(payload, {
      secret: this.configService.getOrThrow<string>('JWT_KEY'),
      expiresIn,
    });
  }
}
