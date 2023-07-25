import { ValueObjectBase } from '@utils/valueObjectBase.abstract';
export class PasswordValueObject extends ValueObjectBase<string> {
  constructor(value: string) {
    super(value);
    if (!value) {
      throw new Error('Password is required');
    }
  }
}
