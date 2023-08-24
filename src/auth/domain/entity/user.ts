import { EmailValueObject } from '@shared/domain/value-objects/email.value.object';
import { PasswordValueObject } from '@shared/domain/value-objects/password.value.object';

export class User {
  name: string;

  constructor(
    private email: EmailValueObject,
    private password: PasswordValueObject,
    private isAdmin: boolean = false,
  ) {}

  setName(name: string) {
    this.name = name;
  }

  toJSON() {
    return {
      email: this.email.getValue,
      password: this.password.getValue,
      name: this.name,
      isAdmin: this.isAdmin,
    };
  }
}
