import { UserDao } from '@src/auth/infrastructure/adapters/secondary/db/dao/user.dao';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthRepository } from '@src/auth/infrastructure/adapters/secondary/db/user.repository';

@Injectable()
export class FindByEmailService {
  constructor(private userRepository: AuthRepository) {}

  async find(email: string): Promise<UserDao> {
    const user: UserDao = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return user;
  }
}
