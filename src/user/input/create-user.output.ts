import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../models/user.model';

@ObjectType()
export class CreateUserOutput extends User {
  constructor(partial: Partial<CreateUserOutput>) {
    super({});
    Object.assign(this, partial);
  }

  @Field()
  token: string;
}
