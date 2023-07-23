import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@users/domain/entity/user';
import { EmailValueObject } from '@users/domain/value-objects/email.value.object';
import { PasswordValueObject } from '@users/domain/value-objects/password.value.object';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { IUserRepositoryInterface } from '@users/infrastructure/ports/secondary/typeorm/user.repository';

@Injectable()
export class SingUpService {
  constructor(@InjectRepository(UserEntity) private userRepository: IUserRepositoryInterface<UserEntity>) {}

  async singUp(email: string, password: string): Promise<UserEntity> {
    //run domain, business rules
    const user: User = new User(new EmailValueObject(email), new PasswordValueObject(password));

    //run infra, persist data
    const userEntity: UserEntity = this.userRepository.create(user.getDataJson() as UserEntity);

    return this.userRepository.save(userEntity);
  }
}
