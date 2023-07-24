import { EmailValueObject } from '@users/domain/value-objects/email.value.object';
import { PasswordValueObject } from '@users/domain/value-objects/password.value.object';

export class User {
  constructor(private email: EmailValueObject, private password: PasswordValueObject) {}

  json() {
    return {
      email: this.email.getValue,
      password: this.password.getValue,
    };
  }
}
