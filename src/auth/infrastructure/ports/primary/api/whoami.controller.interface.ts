export interface IWhoAmIController<R, S> {
  whoami(session: S): Promise<R>;
}
