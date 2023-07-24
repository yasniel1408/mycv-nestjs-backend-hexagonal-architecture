import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@users/domain/entity/user';
import { EmailValueObject } from '@users/domain/value-objects/email.value.object';
import { PasswordValueObject } from '@users/domain/value-objects/password.value.object';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { IUserRepositoryInterface } from '@users/infrastructure/ports/secondary/typeorm/user.repository';
import { FindUsersService } from '@users/usecases/find-users/find-users.service';

@Injectable()
export class SignInService {
  constructor(
    private findUsersService: FindUsersService,
    @InjectRepository(UserEntity) private userRepository: IUserRepositoryInterface<UserEntity>,
  ) {}

  async signin(email: string, password: string): Promise<UserEntity> {
    const [userEntity] = await this.findUsersService.find(email);

    if (!userEntity) {
      throw new NotFoundException('User not found!');
    }

    const userEmail: PasswordValueObject = new PasswordValueObject(password);
    const user: User = new User(new EmailValueObject(email), userEmail);

    if (!(await userEmail.matchPasswords(userEntity.password))) {
      throw new BadRequestException('Bad Password!');
    }

    return (await user.getJsonData()) as UserEntity;
  }
}
