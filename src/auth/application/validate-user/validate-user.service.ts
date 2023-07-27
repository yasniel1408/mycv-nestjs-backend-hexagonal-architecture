import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { FindByEmailService } from '@users/application/find-by-email/find-by-email.service';
import { EncryptionFacadeService } from '../encryption-facade/encryption.facade.service';

@Injectable()
export class ValidateUserService {
  constructor(private findByEmailService: FindByEmailService, private encryptionFacadeService: EncryptionFacadeService) {}

  async validate(email: string, password: string): Promise<UserEntity> {
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
