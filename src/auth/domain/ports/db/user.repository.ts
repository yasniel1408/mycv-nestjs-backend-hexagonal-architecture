export interface IUserRepositoryInterface<D> {
  create(data: D): D;
  save(entity: any, options?: any): Promise<D>;
  find(options?: Partial<D>): Promise<D[]>;
  findBy(options?: Partial<D>): Promise<D[]>;
  findOne(id: any): Promise<D | null>;
  findOneBy(where: any): Promise<D | null>;
}
