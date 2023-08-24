import { ValueRequiredError } from '../errors/value-required-error';
import { ValueObjectBase } from './value-object-base.abstract';

export class PasswordValueObject extends ValueObjectBase<string> {
  constructor(value: string) {
    super(value);
    if (!value) {
      throw new ValueRequiredError('password');
    }
  }
}
