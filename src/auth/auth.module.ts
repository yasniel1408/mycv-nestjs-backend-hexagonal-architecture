import { Module } from '@nestjs/common';
import { SingUpController } from './infrastructure/adapters/primary/http/signup/signup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignInController } from './infrastructure/adapters/primary/http/singin/signin.controller';
import { WhoAmIController } from './infrastructure/adapters/primary/http/whoami/whoami.controller';
import { SignOutController } from './infrastructure/adapters/primary/http/signout/signout.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './infrastructure/auth-strategies/jwt-strategy';
import { LocalStrategy } from './infrastructure/auth-strategies/local-strategy';
import { RefreshJwtStrategy } from './infrastructure/auth-strategies/refresh-token.strategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { UserDao } from './infrastructure/adapters/secondary/db/dao/user.dao';
import { CreateUserService } from './application/create-user/create-user.service';
import { AuthRepository } from './infrastructure/adapters/secondary/db/user.repository';
import { SignUpService } from './application/signup/signup.service';
import { SignInService } from './application/signin/signin.service';
import { ValidateUserService } from './application/validate-user/validate-user.service';
import { EncryptionFacadeService } from './application/encryption-facade/encryption.facade.service';
import { JwtFacadeService } from './application/jwt-facade/jwt.facade.service';
import { RefreshTokenController } from './infrastructure/adapters/primary/http/refresh-token/refresh-token.controller';

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
            // expiresIn: '60s', lo estoy definiendo en el servicio
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
  controllers: [SingUpController, SignInController, WhoAmIController, SignOutController, RefreshTokenController],
})
export class AuthModule {}
