import { UserRepositoryInterface } from '@users/domain/repository/user.repository.interface';

export class UserRepository implements UserRepositoryInterface {
  getAll(): string[] {
    throw new Error('Method not implemented.');
  }
}
