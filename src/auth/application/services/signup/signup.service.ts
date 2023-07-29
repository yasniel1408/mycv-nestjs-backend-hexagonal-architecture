import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EncryptionFacadeService } from '../encryption-facade/encryption.facade.service';
import { CreateUserService } from '@auth/application/usecases/create-user/create-user.service';
import { IUserRepositoryInterface } from '@auth/domain/ports/typeorm/user.repository';
import { FindUsersService } from '../find-users/find-users.service';
import { UserDao } from '@auth/infrastructure/adapters/secondary/typeorm/dao/user.dao';

@Injectable()
export class SignUpService {
  constructor(
    private findUsersService: FindUsersService,
    private encryptionFacadeService: EncryptionFacadeService,
    private createUserService: CreateUserService,
    @InjectRepository(UserDao) private userRepository: IUserRepositoryInterface<UserDao>,
  ) {}

  async signup(email: string, password: string): Promise<UserDao> {
    // Validar que no exista un usuario con el email repetido
    const users = await this.findUsersService.find(email);

    if (users.length) {
      throw new BadRequestException('Email in use!');
    }

    const user = this.createUserService.create(email, password);

    const userDao: UserDao = this.userRepository.create({ ...user, password: await this.encryptionFacadeService.hash(user.password) } as UserDao);

    return this.userRepository.save(userDao);
  }
}
