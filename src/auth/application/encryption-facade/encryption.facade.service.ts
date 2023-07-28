import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { compare, genSalt, hash } from 'bcrypt';

@Injectable()
export class EncryptionFacadeService {
  constructor(private readonly configService: ConfigService) {}
  async hash(plain: string): Promise<string> {
    return hash(plain, await genSalt(this.configService.getOrThrow<number>('SALT_ROUNDS')));
  }
  async compare(plain: string, encrypted: string): Promise<boolean> {
    return compare(plain, encrypted);
  }
}
