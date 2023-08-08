import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDao } from '@src/users/infrastructure/adapters/secondary/db/dao/user.dao';
import { FindUserByIdController } from './infrastructure/adapters/primary/http/find-user-by-id/find-user-by-id.controller';
import { FindUsersController } from './infrastructure/adapters/primary/http/find-users/find-users.controller';
import { RemoveUserController } from './infrastructure/adapters/primary/http/remove-user/remove-user.controller';
import { UpdateUserController } from './infrastructure/adapters/primary/http/update-user/update-user.controller';
import { FindUserByIdService } from './application/find-user-by-id/find-user-by-id.service';
import { UserRepository } from './infrastructure/adapters/secondary/db/user.repository';
import { FindUsersService } from './application/find-users/find-users.service';
import { RemoveUserService } from './application/remove-user/remove-user.service';
import { UpdateUserService } from './application/update-user/update-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDao])],
  exports: [],
  providers: [FindUserByIdService, FindUsersService, RemoveUserService, UpdateUserService, UserRepository],
  controllers: [FindUserByIdController, FindUsersController, RemoveUserController, UpdateUserController],
})
export class UsersModule {}
