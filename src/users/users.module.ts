import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDao } from '@src/users/infrastructure/adapters/secondary/db/dao/user.dao';
import { FindByEmailService } from './application/services/find-by-email/find-by-email.service';
import { FindOneUserController } from './infrastructure/adapters/primary/http/find-user-by-id/find-user-by-id.controller';
import { FindUsersController } from './infrastructure/adapters/primary/http/find-users/find-users.controller';
import { RemoveUserController } from './infrastructure/adapters/primary/http/remove-user/remove-user.controller';
import { UpdateUserController } from './infrastructure/adapters/primary/http/update-user/update-user.controller';
import { UpdateUserService } from './application/services/update-user/update-user.service';
import { FindOneUserService } from './application/services/find-user-by-id/find-user-by-id.service';
import { FindUsersService } from './application/services/find-users/find-users.service';
import { RemoveUserService } from './application/services/remove-user/remove-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDao])],
  exports: [],
  providers: [FindOneUserService, FindUsersService, FindByEmailService, RemoveUserService, UpdateUserService],
  controllers: [FindOneUserController, FindUsersController, RemoveUserController, UpdateUserController],
})
export class UsersModule {}
