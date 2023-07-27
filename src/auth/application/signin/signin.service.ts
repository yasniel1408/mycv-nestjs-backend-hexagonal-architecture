import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { ValidateUserService } from '../validate-user/validate-user.service';
import { ConfigService } from '@config/config.service';
import { JwtFacadeService } from '../jwt-facade/jwt.facade.service';

@Injectable()
export class SignInService {
  constructor(private validateUserService: ValidateUserService, private JwtFacadeService: JwtFacadeService) {}

  async signin(email: string, password: string): Promise<{ user: UserEntity; access_token: string }> {
    const user = await this.validateUserService.validate(email, password);

    const payload = { sub: user.id, email: user.email };

    const access_token = this.JwtFacadeService.createJwt(payload);

    return { user, access_token };
  }
}
