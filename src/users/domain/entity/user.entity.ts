import { EmailValueObject } from '@users/domain/value-objects/email.value.object';
import { PasswordValueObject } from '@users/domain/value-objects/password.value.object';

export class UserEntity {
  id: string;

  email: EmailValueObject;

  password: PasswordValueObject;
}

// @Entity('User')
// export class UserEntity {
//   @PrimaryGeneratedColumn()
//   id: string;

//   @Column()
//   email: EmailValueObject;

//   @Column()
//   password: string;
// }
