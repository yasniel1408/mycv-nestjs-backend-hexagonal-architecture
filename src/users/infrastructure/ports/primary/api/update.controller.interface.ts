export interface IUpdateUserController<B, R> {
  update(id: string, body: B): Promise<R>;
}
