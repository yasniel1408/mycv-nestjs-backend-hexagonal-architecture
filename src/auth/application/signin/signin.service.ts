import { Injectable } from '@nestjs/common';
import { ValidateUserService } from '../validate-user/validate-user.service';
import { JwtFacadeService } from '../jwt-facade/jwt.facade.service';
import { AuthRepository } from '@auth/infrastructure/adapters/secondary/db/user.repository';
import { UserDao } from '@auth/infrastructure/adapters/secondary/db/dao/user.dao';

@Injectable()
export class SignInService {
  constructor(
    private validateUserService: ValidateUserService,
    private jwtFacadeService: JwtFacadeService,
    private userRepository: AuthRepository,
  ) {}

  async signin(email: string, password: string): Promise<{ token: string; refreshToken: string }> {
    const user: UserDao = await this.validateUserService.validate(email, password);

    const { token, refreshToken } = await this.jwtFacadeService.createJwtAndRefreshToken(user);

    Object.assign(user, { refreshToken }); // le asignamos lo que esta en attrs a lo que esta en user

    await this.userRepository.save(user as UserDao);

    return { token, refreshToken };
  }
}
