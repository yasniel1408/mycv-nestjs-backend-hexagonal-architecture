import { EmailValueObject } from '@src/shared/domain/value-objects/email.value.object';

export class User {
  constructor(private id: number, private email: EmailValueObject, private name: string) {}

  async toJSON() {
    return {
      id: this.id,
      email: this.email.getValue,
      name: this.name,
    };
  }
}
