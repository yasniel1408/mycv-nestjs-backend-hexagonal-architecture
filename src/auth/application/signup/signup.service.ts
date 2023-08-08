import { BadRequestException, Injectable } from '@nestjs/common';
import { EncryptionFacadeService } from '../encryption-facade/encryption.facade.service';
import { CreateUserService } from '@auth/application/create-user/create-user.service';
import { UserDao } from '@auth/infrastructure/adapters/secondary/db/dao/user.dao';
import { AuthRepository } from '@auth/infrastructure/adapters/secondary/db/user.repository';

@Injectable()
export class SignUpService {
  constructor(
    private encryptionFacadeService: EncryptionFacadeService,
    private createUserService: CreateUserService,
    private userRepository: AuthRepository,
  ) {}

  async signup(email: string, password: string): Promise<UserDao> {
    // Validar que no exista un usuario con el email repetido
    const ifUserExist: UserDao = await this.userRepository.findByEmail(email);

    if (ifUserExist) {
      throw new BadRequestException('Email in use!');
    }

    const user = this.createUserService.create(email, password);

    const encryptedPassword = await this.encryptionFacadeService.hash(user.password);

    const userDao: UserDao = this.userRepository.create({ ...user, password: encryptedPassword } as UserDao);

    return this.userRepository.save(userDao);
  }
}
