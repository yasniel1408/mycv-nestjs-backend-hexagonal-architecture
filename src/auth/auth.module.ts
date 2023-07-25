import { Module } from '@nestjs/common';
import { SingUpController } from './infrastructure/adapters/primary/api/signup/signup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { FindUsersService } from '@users/usecases/find-users/find-users.service';
import { SignUpService } from '@auth/usecases/signup/signup.service';
import { SignInController } from './infrastructure/adapters/primary/api/singin/signin.controller';
import { SignInService } from './usecases/signin/signin.service';
import { FindOneUserService } from '@users/usecases/find-one-user/find-one-user.service';
import { WhoAmIController } from './infrastructure/adapters/primary/api/whoami/whoami.controller';
import { SignOutController } from './infrastructure/adapters/primary/api/signout/signout.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [SignUpService, FindUsersService, SignInService, FindOneUserService],
  controllers: [SingUpController, SignInController, WhoAmIController, SignOutController],
})
export class AuthModule {}
