import { Module } from '@nestjs/common';
import { SingUpController } from './infrastructure/adapters/primary/http/signup/signup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { FindUsersService } from '@users/application/find-users/find-users.service';
import { SignUpService } from '@auth/application/signup/signup.service';
import { SignInController } from './infrastructure/adapters/primary/http/singin/signin.controller';
import { SignInService } from './application/signin/signin.service';
import { WhoAmIController } from './infrastructure/adapters/primary/http/whoami/whoami.controller';
import { SignOutController } from './infrastructure/adapters/primary/http/signout/signout.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './application/auth-strategies/jwt.strategy';
import { jwtConstants } from './constants';
import { FindByEmailService } from '@users/application/find-by-email/find-by-email.service';
import { ValidateUserService } from './application/validate-user/validate-user.service';
import { LocalStrategy } from './application/auth-strategies/local-strategy';
import { RefreshJwtStrategy } from './application/auth-strategies/refreshToken.strategy';

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
