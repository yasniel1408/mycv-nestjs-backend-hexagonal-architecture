import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateRequestDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  name?: string;
}
