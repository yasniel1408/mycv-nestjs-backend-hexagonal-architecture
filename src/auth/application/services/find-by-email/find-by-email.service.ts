import { IUserRepositoryInterface } from '@src/auth/domain/ports/db/user.repository';
import { UserDao } from '@auth/infrastructure/adapters/secondary/typeorm/dao/user.dao';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindByEmailService {
  constructor(@InjectRepository(UserDao) private userRepository: IUserRepositoryInterface<UserDao>) {}

  async find(email: string): Promise<UserDao> {
    const user: UserDao = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return user;
  }
}
