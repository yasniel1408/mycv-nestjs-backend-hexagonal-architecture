import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ValidateUserService } from '@auth/application/validate-user/validate-user.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private validateUserService: ValidateUserService) {
    super();
  }

  async validate(email: string, password: string) {
    // const user = await this.validateUserService.validate(email, password);
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    // return user;
  }
}
