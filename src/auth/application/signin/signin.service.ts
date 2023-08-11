import { Injectable } from '@nestjs/common';
import { ValidateUserService } from '../validate-user/validate-user.service';
import { JwtFacadeService } from '../jwt-facade/jwt.facade.service';

@Injectable()
export class SignInService {
  constructor(private validateUserService: ValidateUserService, private jwtFacadeService: JwtFacadeService) {}

  async signin(email: string, password: string): Promise<string> {
    const user = await this.validateUserService.validate(email, password);

    const payload = { sub: user.id, email: user.email, isAdmin: user.isAdmin };

    const token = this.jwtFacadeService.createJwt(payload);

    return token;
  }
}
