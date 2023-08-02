import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDao } from '@src/users/infrastructure/adapters/secondary/db/dao/user.dao';
import { IUserRepositoryInterface } from '@src/users/domain/ports/secondary/db/user.repository.interface';

@Injectable()
export class RemoveUserService {
  constructor(@InjectRepository(UserDao) private userRepository: IUserRepositoryInterface<UserDao>) {}

  async remove(id: number): Promise<UserDao> {
    const user: UserDao = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return this.userRepository.remove(user);
  }
}
