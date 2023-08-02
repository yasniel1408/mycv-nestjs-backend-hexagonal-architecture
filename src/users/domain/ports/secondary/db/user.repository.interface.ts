export interface IUserRepositoryInterface<D> {
  save(entity: D, options?: any): Promise<D>;
  find(options?: any): Promise<D[]>;
  findById(where: any): Promise<D | null>;
  remove(entity: D, options?: any): Promise<D>;
}
