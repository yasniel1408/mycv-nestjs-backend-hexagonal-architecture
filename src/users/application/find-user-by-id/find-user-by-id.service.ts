import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDao } from '@users/infrastructure/adapters/secondary/db/dao/user.dao';
import { UserRepository } from '@users/infrastructure/adapters/secondary/db/user.repository';

@Injectable()
export class FindUserByIdService {
  constructor(private userRepository: UserRepository) {}

  async find(id: number): Promise<UserDao> {
    if (!id) {
      return null;
    }

    const user: UserDao = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return user;
  }
}
