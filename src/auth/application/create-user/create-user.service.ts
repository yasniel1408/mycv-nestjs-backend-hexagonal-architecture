import { User } from '@auth/domain/entity/user';
import { Injectable } from '@nestjs/common';
import { EmailValueObject } from '@shared/domain/value-objects/email.value.object';
import { PasswordValueObject } from '@shared/domain/value-objects/password.value.object';

@Injectable()
export class CreateUserService {
  create(email: string, password: string) {
    const user: User = new User(new EmailValueObject(email), new PasswordValueObject(password));

    return user.toJSON();
  }
}
