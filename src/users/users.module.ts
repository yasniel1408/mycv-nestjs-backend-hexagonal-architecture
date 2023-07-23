import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { SingUpService } from './usecases/singup/singup.service';
import { FindOneUserService } from './usecases/find-one-user/find-one-user.service';
import { FindUsersService } from './usecases/find-users/find-users.service';
import { FindByEmailService } from './usecases/find-by-email/find-by-email.service';
import { RemoveUserService } from './usecases/remove-user/remove-user.service';
import { UsersSingUpController } from './infrastructure/adapters/primary/api/signup/users.signup.controller';
import { FindOneUserController } from './infrastructure/adapters/primary/api/find-one-user/find-one-user.controller';
import { FindUsersController } from './infrastructure/adapters/primary/api/find-users/find-users.controller';
import { RemoveUserController } from './infrastructure/adapters/primary/api/remove-user/remove-user.controller';
import { UpdateUserController } from './infrastructure/adapters/primary/api/update-user/update-user.controller';
import { UpdateUserService } from './usecases/update-user/update-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [SingUpService, FindOneUserService, FindUsersService, FindByEmailService, RemoveUserService, UpdateUserService],
  controllers: [UsersSingUpController, FindOneUserController, FindUsersController, RemoveUserController, UpdateUserController],
})
export class UsersModule {}
