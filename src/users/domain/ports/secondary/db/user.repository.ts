export interface IUserRepositoryInterface<D> {
  save(entity: any, options?: any): Promise<D>;
  find(options?: Partial<D>): Promise<D[]>;
  findBy(options?: Partial<D>): Promise<D[]>;
  findOneBy(where: any): Promise<D | null>;
  remove(entity: D, options?: any): Promise<D>;
}
