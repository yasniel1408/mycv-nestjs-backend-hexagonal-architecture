import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtFacadeService {
  constructor(private jwtService: JwtService, private readonly configService: ConfigService) {}
  createJwt(payload: any): string {
    return this.jwtService.sign(payload, { secret: this.configService.getOrThrow<string>('JWT_KEY') });
  }
}
