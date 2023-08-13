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

  async verifyToken(token: string) {
    try {
      await this.jwtService.verifyAsync(token, { secret: this.configService.getOrThrow<string>('JWT_KEY') });
      return true;
    } catch (error) {
      throw new ForbiddenException('Access Denied');
    }
  }

  async createJwtAndRefreshToken(user) {
    const token = await this.createJwt(user, '30s');

    const refreshToken = await this.createJwt(user, '30d');

    return { token, refreshToken };
  }

  async createJwt(user: any, expiresIn: string): Promise<string> {
    const payload = { id: user.id, email: user.email, isAdmin: user.isAdmin };

    return await this.jwtService.signAsync(payload, {
      secret: this.configService.getOrThrow<string>('JWT_KEY'),
      expiresIn,
    });
  }
}
