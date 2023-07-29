import { EmailValueObject } from '@shared/domain/value-objects/email.value.object';
import { PasswordValueObject } from '@shared/domain/value-objects/password.value.object';

export class User {
  constructor(private email: EmailValueObject, private password: PasswordValueObject) {}

  toJSON() {
    return {
      email: this.email.getValue,
      password: this.password.getValue,
    };
  }
}
