import { Injectable } from '@nestjs/common';
import { ConfigService } from '@config/config.service';
import { compare, hash } from 'bcrypt';

@Injectable()
export class EncryptionFacadeService {
  constructor(private readonly config: ConfigService) {}
  async hash(plain: string): Promise<string> {
    return hash(plain, this.config.jwtKey);
  }
  async compare(plain: string, encrypted: string): Promise<boolean> {
    return compare(plain, encrypted);
  }
}
