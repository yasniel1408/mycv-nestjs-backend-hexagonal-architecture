import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@users/domain/entity/user';
import { EmailValueObject } from '@users/domain/value-objects/email.value.object';
import { PasswordValueObject } from '@users/domain/value-objects/password.value.object';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { IUserRepositoryInterface } from '@users/infrastructure/ports/secondary/typeorm/user.repository';
import { FindUsersService } from '@users/application/find-users/find-users.service';
import { EncryptionFacadeService } from '../encryption-facade/encryption.facade.service';

@Injectable()
export class SignUpService {
  constructor(
    private findUsersService: FindUsersService,
    private encryptionFacadeService: EncryptionFacadeService,
    @InjectRepository(UserEntity) private userRepository: IUserRepositoryInterface<UserEntity>,
  ) {}

  async signup(email: string, password: string): Promise<UserEntity> {
    // Validar que no exista un usuario con el email repetido
    const users = await this.findUsersService.find(email);

    if (users.length) {
      throw new BadRequestException('Email in use!');
    }

    const user: User = new User(new EmailValueObject(email), new PasswordValueObject(password));

    const userEntity: UserEntity = this.userRepository.create({
      ...(await user.getJsonData()),
      password: await this.encryptionFacadeService.hash(password),
    } as UserEntity);

    return this.userRepository.save(userEntity);
  }
}
