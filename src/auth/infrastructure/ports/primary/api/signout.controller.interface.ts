export interface ISignOutController<S> {
  whoami(session: S): Promise<void>;
}
