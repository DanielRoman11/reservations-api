import { IsEmail, IsStrongPassword, Length } from 'class-validator';

export class CreateUserDto {
  @Length(4, 20)
  username: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({ minNumbers: 1 })
  @Length(4, 40)
  password: string;
}
