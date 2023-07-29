import { ValueObjectBase } from './value-object-base.abstract';

export class PasswordValueObject extends ValueObjectBase<string> {
  constructor(value: string) {
    super(value);
    if (!value) {
      throw new Error('Password is required');
    }
  }
}
