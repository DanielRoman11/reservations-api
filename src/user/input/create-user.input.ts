import { InputType } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Length(4, 20)
  username: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({ minNumbers: 1 })
  @Length(4, 40)
  password: string;
}
