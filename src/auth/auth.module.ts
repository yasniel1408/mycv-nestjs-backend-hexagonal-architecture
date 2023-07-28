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
import { ValidateUserService } from './application/validate-user/validate-user.service';
import { LocalStrategy } from './application/auth-strategies/local-strategy';
import { RefreshJwtStrategy } from './application/auth-strategies/refreshToken.strategy';
import { PassportModule } from '@nestjs/passport';
import { EncryptionFacadeService } from './application/encryption-facade/encryption.facade.service';
import { JwtFacadeService } from './application/jwt-facade/jwt.facade.service';
import { ConfigService } from '@nestjs/config';
import { CurrentUserInterceptor } from './infrastructure/interceptors/current-user.interceptor';
import { FindOneUserService } from '@users/application/find-one-user/find-one-user.service';
import { FindByEmailService } from '@users/application/find-by-email/find-by-email.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    // Config JWT Auth
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          // secret: configService.jwtKey,
          secretOrPrivateKey: configService.getOrThrow<string>('JWT_KEY'),
          signOptions: {
            expiresIn: '60s',
            // expiresIn: '7d',
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [
    SignUpService,
    FindUsersService,
    SignInService,
    FindOneUserService,
    FindByEmailService,
    JwtService,
    JwtStrategy,
    ValidateUserService,
    LocalStrategy,
    RefreshJwtStrategy,
    EncryptionFacadeService,
    JwtFacadeService,
    // {
    //   provide: APP_INTERCEPTOR, // Interceptor para recuperar la información del usuario fresca de la base de datos
    //   useClass: CurrentUserInterceptor,
    // },
  ],
  controllers: [SingUpController, SignInController, WhoAmIController, SignOutController],
})
export class AuthModule {}
