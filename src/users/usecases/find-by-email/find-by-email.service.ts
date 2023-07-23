import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { IUserRepositoryInterface } from '@users/infrastructure/ports/secondary/typeorm/user.repository';

@Injectable()
export class FindByEmailService {
  constructor(@InjectRepository(UserEntity) private userRepository: IUserRepositoryInterface<UserEntity>) {}

  async find(email: string): Promise<UserEntity> {
    const user: UserEntity = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return user;
  }
}
