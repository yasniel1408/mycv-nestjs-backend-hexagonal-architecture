import { Injectable } from '@nestjs/common';
import { UserDao } from '@src/users/infrastructure/adapters/secondary/db/dao/user.dao';
import { UserRepository } from '@src/users/infrastructure/adapters/secondary/db/user.repository';

@Injectable()
export class FindUsersService {
  constructor(private userRepository: UserRepository) {}

  async find(): Promise<UserDao[]> {
    const users: UserDao[] = await this.userRepository.find();

    return users;
  }
}
