import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDao } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao';
import { IUserRepositoryInterface } from '@users/domain/ports/secondary/typeorm/user.repository';

@Injectable()
export class FindOneUserService {
  constructor(@InjectRepository(UserDao) private userRepository: IUserRepositoryInterface<UserDao>) {}

  async findOne(id: number): Promise<UserDao> {
    if (!id) {
      return null;
    }

    const user: UserDao = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return user;
  }
}
