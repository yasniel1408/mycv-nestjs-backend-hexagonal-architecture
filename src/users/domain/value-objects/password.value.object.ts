import { ValueObjectBase } from '@utils/valueObjectBase.abstract';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

export class PasswordValueObject extends ValueObjectBase<string> {
  constructor(value: string) {
    super(value);
    if (!value) {
      throw new Error('Password is required');
    }
  }

  async encryptPassword(): Promise<string> {
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(this.getValue, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    return result;
  }

  async matchPasswords(encryptedPassword: string): Promise<boolean> {
    const [salt, storedHash] = encryptedPassword.split('.');

    const hash = (await scrypt(this.value, salt, 32)) as Buffer;

    if (storedHash === hash.toString('hex')) {
      return true;
    }

    return false;
  }
}
