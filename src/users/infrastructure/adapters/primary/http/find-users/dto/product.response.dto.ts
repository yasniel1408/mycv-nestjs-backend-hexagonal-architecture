import { Expose } from 'class-transformer';

export class Product {
  @Expose()
  id: number;

  @Expose()
  price: number;
}
