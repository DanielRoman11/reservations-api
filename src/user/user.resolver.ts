import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { Inject } from '@nestjs/common';
import { USER } from 'src/constants';
import { Repository } from 'typeorm';

@Resolver(() => User)
export class UserResolver {
  constructor(
    @Inject(USER)
    private readonly userRepo: Repository<User>,
  ) {}

  @Query(() => [User], { name: 'users' })
  public async users(): Promise<User[]> {
    return await this.userRepo.find();
  }
}
