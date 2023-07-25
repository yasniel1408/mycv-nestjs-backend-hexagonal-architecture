import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { FindOneUserService } from './application/find-one-user/find-one-user.service';
import { FindUsersService } from './application/find-users/find-users.service';
import { FindByEmailService } from './application/find-by-email/find-by-email.service';
import { RemoveUserService } from './application/remove-user/remove-user.service';
import { FindOneUserController } from './infrastructure/adapters/primary/http/find-one-user/find-one-user.controller';
import { FindUsersController } from './infrastructure/adapters/primary/http/find-users/find-users.controller';
import { RemoveUserController } from './infrastructure/adapters/primary/http/remove-user/remove-user.controller';
import { UpdateUserController } from './infrastructure/adapters/primary/http/update-user/update-user.controller';
import { UpdateUserService } from './application/update-user/update-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [FindUsersService, FindOneUserService],
  providers: [FindOneUserService, FindUsersService, FindByEmailService, RemoveUserService, UpdateUserService],
  controllers: [FindOneUserController, FindUsersController, RemoveUserController, UpdateUserController],
})
export class UsersModule {}
