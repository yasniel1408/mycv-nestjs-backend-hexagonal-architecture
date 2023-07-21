import { EMAIL_PATTERN } from '@users/constants';
import { ValueObjectBase } from '@utils/valueObjectBase.abstract';

export class EmailValueObject extends ValueObjectBase<string> {
  constructor(value: string) {
    super(value);
    if (!value) {
      throw new Error('Email is required');
    }

    if (!this.isValid(value)) {
      throw new Error('Email is invalid');
    }

    this.setPattern(EMAIL_PATTERN);
  }

  get getDomain(): string {
    return this.value.split('@')[1];
  }
}
