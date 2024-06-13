import { Inject, Injectable } from '@nestjs/common';
import { USER } from 'src/constants';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER)
    private readonly userRepo: Repository<User>,
  ) {}
}
