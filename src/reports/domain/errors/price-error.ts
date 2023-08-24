export class PriceError extends Error {
  constructor() {
    super('Price must be between 0 and 1000000');
  }
}
