import { EMAIL_PATTERN } from '@users/constants';
import { ValueObjectBase } from '@utils/value-object-base.abstract';

export class EmailValueObject extends ValueObjectBase<string> {
  constructor(value: string) {
    super(value);
    this.setPattern(EMAIL_PATTERN);
    if (!value) {
      throw new Error('Email is required');
    }

    if (!this.isValid(value)) {
      throw new Error('Email is invalid');
    }
  }

  get getDomain(): string {
    return this.value.split('@')[1];
  }
}
