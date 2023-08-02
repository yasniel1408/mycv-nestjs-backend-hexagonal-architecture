import { Repository, SaveOptions } from 'typeorm';
import { UserDao } from './dao/user.dao';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { IAuthRepositoryInterface } from '@src/auth/domain/ports/db/user.repository';

@Injectable()
export class AuthRepository implements IAuthRepositoryInterface<UserDao> {
  constructor(
    @InjectRepository(UserDao)
    private repository: Repository<UserDao>,
  ) {}

  create(data: UserDao): UserDao {
    return this.repository.create(data);
  }

  findByEmail(email: string): Promise<UserDao | null> {
    return this.repository.findOneBy({ email });
  }

  save(entity: UserDao, options?: SaveOptions): Promise<UserDao> {
    return this.repository.save(entity, options);
  }
}
