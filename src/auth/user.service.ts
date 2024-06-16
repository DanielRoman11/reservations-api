import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { USER } from '../constants';
import { MongoRepository, ObjectId } from 'typeorm';
import { User } from './models/user.model';
import { CreateUserInput } from './input/create-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER)
    private readonly userRepo: MongoRepository<User>,
  ) {}

  public async findUser(value: string): Promise<User | null> {
    return await this.userRepo.findOne({
      where: { $or: [{ email: value }, { username: value }] },
    });
  }

  public async addUser(input: CreateUserInput) {
    return await this.userRepo.save(
      new User({
        ...input,
        password: await bcrypt.hash(input.password, await bcrypt.genSalt()),
      }),
    );
  }
}
