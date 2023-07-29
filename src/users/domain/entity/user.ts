import { EmailValueObject } from '@shared/domain/value-objects/email.value.object';

export class User {
  constructor(private email: EmailValueObject, private name: string) {}

  async toJSON() {
    return {
      email: this.email.getValue,
      name: this.name,
    };
  }
}
