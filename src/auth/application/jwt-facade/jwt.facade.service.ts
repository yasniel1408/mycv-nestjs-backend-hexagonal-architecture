import { Injectable } from '@nestjs/common';
import { ConfigService } from '@config/config.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtFacadeService {
  constructor(private jwtService: JwtService, private readonly configService: ConfigService) {}
  createJwt(payload: any): string {
    return this.jwtService.sign(payload, { secret: this.configService.jwtKey });
  }
}
