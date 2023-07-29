import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDao } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao';
import { IUserRepositoryInterface } from '@users/domain/ports/secondary/typeorm/user.repository';

@Injectable()
export class FindUsersService {
  constructor(@InjectRepository(UserDao) private userRepository: IUserRepositoryInterface<UserDao>) {}

  async find(email?: string): Promise<UserDao[]> {
    const users: UserDao[] = await this.userRepository.findBy({ email });

    return users;
  }
}
