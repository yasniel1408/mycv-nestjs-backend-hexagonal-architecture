import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SingUpRequestDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
