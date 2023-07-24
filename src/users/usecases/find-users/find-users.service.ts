import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { IUserRepositoryInterface } from '@users/infrastructure/ports/secondary/typeorm/user.repository';

@Injectable()
export class FindUsersService {
  constructor(@InjectRepository(UserEntity) private userRepository: IUserRepositoryInterface<UserEntity>) {}

  async find(email: string): Promise<UserEntity[]> {
    const users: UserEntity[] = await this.userRepository.findBy({ email });

    return users;
  }
}
