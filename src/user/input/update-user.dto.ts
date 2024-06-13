import { PartialType } from '@nestjs/swagger';
import { InputType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserInput) {}
