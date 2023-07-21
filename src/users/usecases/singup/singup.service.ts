import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@users/domain/entity/user';
import { EmailValueObject } from '@users/domain/value-objects/email.value.object';
import { PasswordValueObject } from '@users/domain/value-objects/password.value.object';
import { UserEntity } from '@users/infrastructure/adapters/secondary/sqlite/entity/user.entity';
import { IUserRepositoryInterface } from '@users/infrastructure/ports/secondary/sqlite/user.repository';

@Injectable()
export class SingUpService {
  constructor(@InjectRepository(UserEntity) private userRepository: IUserRepositoryInterface<UserEntity>) {}

  singUp(email: string, password: string) {
    //run domain, business rules
    const user: User = new User(new EmailValueObject(email), new PasswordValueObject(password));

    //run infra, persist data
    const userEntity: UserEntity = this.userRepository.create(user.getDataJson() as UserEntity);

    return this.userRepository.save(userEntity);
  }
}
