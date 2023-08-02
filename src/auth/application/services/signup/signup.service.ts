import { BadRequestException, Injectable } from '@nestjs/common';
import { EncryptionFacadeService } from '../encryption-facade/encryption.facade.service';
import { CreateUserService } from '@auth/application/usecases/create-user/create-user.service';
import { UserDao } from '@src/auth/infrastructure/adapters/secondary/db/dao/user.dao';
import { FindByEmailService } from '../find-by-email/find-by-email.service';
import { AuthRepository } from '@src/auth/infrastructure/adapters/secondary/db/user.repository';

@Injectable()
export class SignUpService {
  constructor(
    private findByEmailService: FindByEmailService,
    private encryptionFacadeService: EncryptionFacadeService,
    private createUserService: CreateUserService,
    private userRepository: AuthRepository,
  ) {}

  async signup(email: string, password: string): Promise<UserDao> {
    // Validar que no exista un usuario con el email repetido
    const ifUserExist = await this.findByEmailService.find(email);

    if (ifUserExist) {
      throw new BadRequestException('Email in use!');
    }

    const user = this.createUserService.create(email, password);

    const userDao: UserDao = this.userRepository.create({ ...user, password: await this.encryptionFacadeService.hash(user.password) } as UserDao);

    return this.userRepository.save(userDao);
  }
}
