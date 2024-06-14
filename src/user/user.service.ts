import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { USER } from '../constants';
import { MongoRepository } from 'typeorm';
import { User } from './models/user.model';
import { CreateUserInput } from './input/create-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER)
    private readonly userRepo: MongoRepository<User>,
  ) {}

  public async addUser(input: CreateUserInput) {
    const userExist = await this.userRepo.findOne({
      where: { $or: [{ username: input.username }, { email: input.username }] },
    });

    if (userExist)
      throw new BadRequestException(`This username or email is already taken`);

    return await this.userRepo.save(
      new User({
        ...input,
        password: await bcrypt.hash(input.password, await bcrypt.genSalt()),
      }),
    );
  }
}
