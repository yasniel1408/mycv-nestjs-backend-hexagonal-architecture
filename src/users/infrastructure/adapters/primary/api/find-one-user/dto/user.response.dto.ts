import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserResponseDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
