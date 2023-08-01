import { IUserRepositoryInterface } from '@src/auth/domain/ports/db/user.repository';
import { UserDao } from '@auth/infrastructure/adapters/secondary/typeorm/dao/user.dao';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindUsersService {
  constructor(@InjectRepository(UserDao) private userRepository: IUserRepositoryInterface<UserDao>) {}

  async find(email?: string): Promise<UserDao[]> {
    const users: UserDao[] = await this.userRepository.findBy({ email });

    return users;
  }
}
