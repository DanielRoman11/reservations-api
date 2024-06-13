import { Inject, Injectable } from '@nestjs/common';
import { USER } from '../constants';
import { Repository } from 'typeorm';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER)
    private readonly userRepo: Repository<User>,
  ) {}
}
