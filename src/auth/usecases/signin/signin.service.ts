import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@users/infrastructure/adapters/secondary/typeorm/dao/user.dao.entity';
import { FindByEmailService } from '@users/usecases/find-by-email/find-by-email.service';
import { compare } from 'bcrypt';

@Injectable()
export class SignInService {
  constructor(private findByEmailService: FindByEmailService, private jwtService: JwtService) {}

  async signin(email: string, password: string): Promise<{ user: UserEntity; access_token: string }> {
    const user = await this.findByEmailService.find(email);

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    if (!(await compare(password, user.password))) {
      throw new BadRequestException('Bad Password!');
    }

    const payload = { sub: user.id, email: user.email };

    const access_token = this.jwtService.sign(payload);

    return { user, access_token };
  }
}
