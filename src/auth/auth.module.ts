import { Module } from '@nestjs/common';
import { SingUpController } from './infrastructure/adapters/primary/http/signup/signup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignUpService } from '@auth/application/services/signup/signup.service';
import { SignInController } from './infrastructure/adapters/primary/http/singin/signin.controller';
import { SignInService } from './application/services/signin/signin.service';
import { WhoAmIController } from './infrastructure/adapters/primary/http/whoami/whoami.controller';
import { SignOutController } from './infrastructure/adapters/primary/http/signout/signout.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './infrastructure/auth-strategies/jwt.strategy';
import { ValidateUserService } from './application/services/validate-user/validate-user.service';
import { LocalStrategy } from './infrastructure/auth-strategies/local-strategy';
import { RefreshJwtStrategy } from './infrastructure/auth-strategies/refreshToken.strategy';
import { PassportModule } from '@nestjs/passport';
import { EncryptionFacadeService } from './application/services/encryption-facade/encryption.facade.service';
import { JwtFacadeService } from './application/services/jwt-facade/jwt.facade.service';
import { ConfigService } from '@nestjs/config';
import { UserDao } from './infrastructure/adapters/secondary/db/dao/user.dao';
import { CreateUserService } from './application/usecases/create-user/create-user.service';
import { AuthRepository } from './infrastructure/adapters/secondary/db/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDao]),
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
    SignInService,
    JwtService,
    JwtStrategy,
    ValidateUserService,
    LocalStrategy,
    RefreshJwtStrategy,
    EncryptionFacadeService,
    JwtFacadeService,
    CreateUserService,
    AuthRepository,
    // {
    //   provide: APP_INTERCEPTOR, // Interceptor para recuperar la información del usuario fresca de la base de datos
    //   useClass: CurrentUserInterceptor,
    // },
  ],
  controllers: [SingUpController, SignInController, WhoAmIController, SignOutController],
})
export class AuthModule {}
