import { shallowEqual } from 'shallow-equal-object';

export abstract class ValueObjectBase<T> {
  protected readonly value: T;
  private PATTERN: RegExp;

  constructor(value: T) {
    this.value = Object.freeze(value);
  }

  public equals(vo?: ValueObjectBase<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.value === undefined) {
      return false;
    }
    return shallowEqual(this.value, vo.value);
  }

  public get getValue(): T {
    return this.value;
  }

  isValid(value): boolean {
    return this.PATTERN.test(value);
  }

  setPattern(newPattern: RegExp): void {
    this.PATTERN = newPattern;
  }
}
