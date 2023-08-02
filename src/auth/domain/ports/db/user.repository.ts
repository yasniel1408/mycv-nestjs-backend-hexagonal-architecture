export interface IAuthRepositoryInterface<D> {
  create(data: D): D;
  save(entity: any, options?: any): Promise<D>;
  findByEmail(email: string): Promise<D | null>;
}
