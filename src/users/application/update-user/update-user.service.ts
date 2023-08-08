import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDao } from '@src/users/infrastructure/adapters/secondary/db/dao/user.dao';
import { UserRepository } from '@src/users/infrastructure/adapters/secondary/db/user.repository';

@Injectable()
export class UpdateUserService {
  constructor(private userRepository: UserRepository) {}

  async update(id: number, attrs: Partial<UserDao>) {
    const user: UserDao = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    Object.assign(user, attrs); // le asignamos lo que esta en attrs a lo que esta en user

    return this.userRepository.save(user);
  }
}
