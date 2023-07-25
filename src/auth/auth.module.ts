import { Module } from '@nestjs/common';
import { SingUpController } from './infrastructure/adapters/primary/api/signup/signup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { FindUsersService } from '@users/usecases/find-users/find-users.service';
import { SignUpService } from '@auth/usecases/signup/signup.service';
import { SignInController } from './infrastructure/adapters/primary/api/singin/signin.controller';
import { SignInService } from './usecases/signin/signin.service';
import { WhoAmIController } from './infrastructure/adapters/primary/api/whoami/whoami.controller';
import { SignOutController } from './infrastructure/adapters/primary/api/signout/signout.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './usecases/auth-strategies/jwt.strategy';
import { jwtConstants } from './constants';
import { FindByEmailService } from '@users/usecases/find-by-email/find-by-email.service';
import { ValidateUserService } from './usecases/validate-user/validate-user.service';
import { LocalStrategy } from './usecases/auth-strategies/local-strategy';
import { RefreshJwtStrategy } from './usecases/auth-strategies/refreshToken.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    SignUpService,
    FindUsersService,
    SignInService,
    FindByEmailService,
    JwtService,
    JwtStrategy,
    ValidateUserService,
    LocalStrategy,
    RefreshJwtStrategy,
  ],
  controllers: [SingUpController, SignInController, WhoAmIController, SignOutController],
})
export class AuthModule {}
