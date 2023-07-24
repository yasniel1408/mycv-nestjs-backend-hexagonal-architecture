import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignUpRequestDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
