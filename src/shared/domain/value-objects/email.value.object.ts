import { EMAIL_PATTERN } from '@users/constants';
import { ValueObjectBase } from './value-object-base.abstract';
import { ValueRequiredError } from '../errors/value-required-error';

export class EmailValueObject extends ValueObjectBase<string> {
  constructor(value: string) {
    super(value);
    this.setPattern(EMAIL_PATTERN);
    if (!value) {
      throw new ValueRequiredError('email');
    }

    if (!this.isValid(value)) {
      throw new ValueRequiredError('email');
    }
  }

  get getDomain(): string {
    return this.value.split('@')[1];
  }
}
