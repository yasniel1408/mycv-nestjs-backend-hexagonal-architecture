import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/adapters/secondary/sqlite/entity/user.entity';
import { UsersSingUpController } from './infrastructure/adapters/primary/api/users.signup.controller';
import { SingUpService } from './usecases/singup/singup.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [SingUpService],
  controllers: [UsersSingUpController],
})
export class UsersModule {}
