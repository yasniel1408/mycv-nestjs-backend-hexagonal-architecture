import { FindOptionsWhere, RemoveOptions, DeepPartial, SaveOptions } from 'typeorm';

export interface IUserRepositoryInterface<D> {
  create(data: D): D;
  save<T extends DeepPartial<D>>(entity: T, options?: SaveOptions): Promise<T & D>;
  find(options?: Partial<D>): Promise<D[]>;
  findBy(options?: Partial<D>): Promise<D[]>;
  findOne(id: any): Promise<D | null>;
  findOneBy(where: FindOptionsWhere<D> | FindOptionsWhere<D>[]): Promise<D | null>;
  remove(entity: D, options?: RemoveOptions): Promise<D>;
}
