import { MileageError } from '../errors/mileage-error';
import { PriceError } from '../errors/price-error';
import { YearError } from '../errors/year-error';
import { User } from './user';

export class Report {
  model?: string;
  lng?: number;
  lat?: number;
  mileage?: number;
  approved: boolean;
  user: User;

  constructor(private price: number, private make: string, private year: number) {
    if (year < 1930 || year > 2050) {
      throw new YearError();
    }
    if (price < 0 || price > 1000000) {
      throw new PriceError();
    }
  }

  setUser(user: User) {
    this.user = user;
  }

  setApproved(approved: boolean) {
    this.approved = approved;
  }

  setOptionalFields(model?: string, lng?: number, lat?: number, mileage?: number) {
    this.model = model;
    this.lng = lng;
    this.lat = lat;
    if (mileage < 0 || mileage > 1000000) {
      throw new MileageError();
    }
    this.mileage = mileage;
  }

  toJSON() {
    return {
      price: this.price,
      make: this.make,
      model: this.model,
      year: this.year,
      lng: this.lng,
      lat: this.lat,
      mileage: this.mileage,
      approved: this.approved,
    };
  }
}
