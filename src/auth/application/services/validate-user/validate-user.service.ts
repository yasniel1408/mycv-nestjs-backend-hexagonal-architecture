import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EncryptionFacadeService } from '../encryption-facade/encryption.facade.service';
import { UserDao } from '@auth/infrastructure/adapters/secondary/typeorm/dao/user.dao';
import { FindByEmailService } from '../find-by-email/find-by-email.service';

@Injectable()
export class ValidateUserService {
  constructor(private findByEmailService: FindByEmailService, private encryptionFacadeService: EncryptionFacadeService) {}

  async validate(email: string, password: string): Promise<UserDao> {
    const user = await this.findByEmailService.find(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!(await this.encryptionFacadeService.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return user;
  }
}
