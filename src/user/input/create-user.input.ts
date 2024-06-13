import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword, Length } from 'class-validator';
import { IsRepeated } from '../../validation/is-repeated-password.constraint';

@InputType()
export class CreateUserInput {
  @Length(4, 20)
  @Field()
  username: string;

  @IsEmail()
  @Field()
  email: string;

  @IsStrongPassword({
    minNumbers: 1,
    minLength: 4,
    minLowercase: 1,
    minUppercase: 0,
    minSymbols: 0,
  })
  @Field()
  password: string;

  @IsRepeated('password')
  @Field()
  repassword: string;
}
