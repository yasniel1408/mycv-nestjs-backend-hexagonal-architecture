import { EmailValueObject } from '@users/domain/value-objects/email.value.object';
import { PasswordValueObject } from '@users/domain/value-objects/password.value.object';

export class User {
  constructor(private email: EmailValueObject, private password: PasswordValueObject) {}

  async getJsonData() {
    return {
      email: this.email.getValue,
      password: await this.password.encryptPassword(),
    };
  }
}
