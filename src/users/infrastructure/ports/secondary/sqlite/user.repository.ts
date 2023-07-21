import { FindOptionsWhere, ObjectId, DeleteResult, FindManyOptions } from 'typeorm';

export interface IUserRepositoryInterface<D> {
  create(data: D): D;
  save(data: D): Promise<D[]>;
  find(options?: FindManyOptions<D>): Promise<D[]>;
  findOne(id: string): D[];
  delete(criteria: string | string[] | number | number[] | Date | Date[] | ObjectId | ObjectId[] | FindOptionsWhere<D>): Promise<DeleteResult>;
}
