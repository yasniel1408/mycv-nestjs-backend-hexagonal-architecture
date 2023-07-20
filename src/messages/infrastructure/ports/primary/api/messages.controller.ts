export interface IMessagesPortController<B> {
  getMessage(id: string): string;
  createMessage(body: B): any;
  listMessages(): any;
}
