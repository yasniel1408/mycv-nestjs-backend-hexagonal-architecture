import { EmailValueObject } from '@users/domain/value-objects/email.value.object';
import { PasswordValueObject } from '@users/domain/value-objects/password.value.object';

export class User {
  id: string;
  email: EmailValueObject;
  password: PasswordValueObject;
}
