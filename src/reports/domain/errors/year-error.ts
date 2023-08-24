export class YearError extends Error {
  constructor() {
    super('Year must be between 1930 and 2050');
  }
}
