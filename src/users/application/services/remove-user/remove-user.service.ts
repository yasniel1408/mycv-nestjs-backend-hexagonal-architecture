import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDao } from '@src/users/infrastructure/adapters/secondary/db/dao/user.dao';
import { UserRepository } from '@src/users/infrastructure/adapters/secondary/db/user.repository';

@Injectable()
export class RemoveUserService {
  constructor(private userRepository: UserRepository) {}

  async remove(id: number): Promise<UserDao> {
    const user: UserDao = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return this.userRepository.remove(user);
  }
}
