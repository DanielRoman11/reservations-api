import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from './models/user.model';
import { Inject } from '@nestjs/common';
import { USER } from '../constants';
import { Repository } from 'typeorm';
import { CreateUserInput } from './input/create-user.input';
import { Booking } from '../booking/models/booking.model';
import { BookingService } from '../booking/booking.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly bookingService: BookingService,
    @Inject(USER)
    private readonly userRepo: Repository<User>,
  ) {}

  @Query(() => [User], { name: 'users' })
  public async users(): Promise<User[]> {
    return await this.userRepo.find();
  }

  @Mutation(() => User, { name: 'addUser' })
  public async create(
    @Args('input', { type: () => CreateUserInput })
    input: CreateUserInput,
  ): Promise<User> {
    return await this.userRepo.save(input);
  }

  @ResolveField(() => [Booking], { name: 'bookings', nullable: true })
  async getBookings(@Parent() user: User): Promise<Booking[]> {
    return await this.bookingService.getBookingByUserId(user.id);
  }
}
