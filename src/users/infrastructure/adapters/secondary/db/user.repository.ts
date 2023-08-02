import { IUserRepositoryInterface } from '@src/users/domain/ports/secondary/db/user.repository.interface';
import { FindManyOptions, RemoveOptions, Repository, SaveOptions } from 'typeorm';
import { UserDao } from './dao/user.dao';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository implements IUserRepositoryInterface<UserDao> {
  constructor(
    @InjectRepository(UserDao)
    private repository: Repository<UserDao>,
  ) {}

  save(entity: UserDao, options?: SaveOptions): Promise<UserDao> {
    return this.repository.save(entity, options);
  }

  find(options?: FindManyOptions<UserDao>): Promise<UserDao[]> {
    return this.repository.find(options);
  }

  findById(id: number): Promise<UserDao | null> {
    return this.repository.findOneBy({ id });
  }

  remove(entity: UserDao, options?: RemoveOptions): Promise<UserDao> {
    return this.repository.remove(entity, options);
  }
}
