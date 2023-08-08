import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EncryptionFacadeService } from '../encryption-facade/encryption.facade.service';
import { UserDao } from '@auth/infrastructure/adapters/secondary/db/dao/user.dao';
import { AuthRepository } from '@auth/infrastructure/adapters/secondary/db/user.repository';

@Injectable()
export class ValidateUserService {
  constructor(private encryptionFacadeService: EncryptionFacadeService, private userRepository: AuthRepository) {}

  async validate(email: string, password: string): Promise<UserDao> {
    const user: UserDao = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!(await this.encryptionFacadeService.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return user;
  }
}
