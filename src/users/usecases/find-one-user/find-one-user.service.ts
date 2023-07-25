import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { IUserRepositoryInterface } from '@users/infrastructure/ports/secondary/typeorm/user.repository';

@Injectable()
export class FindOneUserService {
  constructor(@InjectRepository(UserEntity) private userRepository: IUserRepositoryInterface<UserEntity>) {}

  async findOne(id: number): Promise<UserEntity> {
    // if (!id) {
    //   throw new NotFoundException('User not found!');
    // }

    const user: UserEntity = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return user;
  }
}
