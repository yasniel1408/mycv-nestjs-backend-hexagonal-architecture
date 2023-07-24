import { Module } from '@nestjs/common';
import { UsersSingUpController } from './infrastructure/adapters/primary/api/signup/users.signup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { FindUsersService } from '@users/usecases/find-users/find-users.service';
import { SignUpService } from '@auth/usecases/signup/signup.service';
import { UsersSignInController } from './infrastructure/adapters/primary/api/singin/users.signin.controller';
import { SignInService } from './usecases/signin/signin.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [SignUpService, FindUsersService, SignInService],
  controllers: [UsersSingUpController, UsersSignInController],
})
export class AuthModule {}
