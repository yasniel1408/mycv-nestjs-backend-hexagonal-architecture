export class ValueRequiredError extends Error {
  constructor(private value: string) {
    super(`Value is required: ${value}`);
    this.name = 'ValueRequiredError';
  }
}
