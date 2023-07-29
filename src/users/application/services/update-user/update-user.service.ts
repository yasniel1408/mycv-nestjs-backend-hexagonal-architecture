import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDao } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao';
import { IUserRepositoryInterface } from '@users/domain/ports/secondary/typeorm/user.repository';

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
