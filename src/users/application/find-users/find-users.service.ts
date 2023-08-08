import { Injectable } from '@nestjs/common';
import { UserDao } from '@users/infrastructure/adapters/secondary/db/dao/user.dao';
import { UserRepository } from '@users/infrastructure/adapters/secondary/db/user.repository';

@Injectable()
export class FindUsersService {
  constructor(private userRepository: UserRepository) {}

  async find(): Promise<UserDao[]> {
    const users: UserDao[] = await this.userRepository.find({ relations: ['reports'] });

    return users;
  }
}
