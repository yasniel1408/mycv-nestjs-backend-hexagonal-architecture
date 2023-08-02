import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDao } from '@src/users/infrastructure/adapters/secondary/db/dao/user.dao';
import { IUserRepositoryInterface } from '@src/users/domain/ports/secondary/db/user.repository.interface';

@Injectable()
export class UpdateUserService {
  constructor(@InjectRepository(UserDao) private userRepository: IUserRepositoryInterface<UserDao>) {}

  async update(id: number, attrs: Partial<UserDao>) {
    const user: UserDao = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    Object.assign(user, attrs); // le asignamos lo que esta en attrs a lo que esta en user

    return this.userRepository.save(user);
  }
}
