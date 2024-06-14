import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from './models/user.model';
import { BadRequestException, Inject } from '@nestjs/common';
import { USER } from '../constants';
import { MongoRepository, ObjectId, Repository } from 'typeorm';
import { CreateUserInput } from './input/create-user.input';
import { Booking } from '../booking/models/booking.model';
import { BookingService } from '../booking/booking.service';
import * as bcrypt from 'bcrypt';
import { CreateUserOutput } from './input/create-user.output';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly bookingService: BookingService,
    @Inject(USER)
    private readonly userRepo: MongoRepository<User>,
  ) {}

  @Query(() => [User], { name: 'users' })
  public async users(): Promise<User[]> {
    return await this.userRepo.find();
  }

  @Query(() => User, { name: 'user' })
  public async user(
    @Args('id', { type: () => String })
    id: string,
  ): Promise<User> {
    return await this.userRepo.findOne({ where: { id: new ObjectId(id) } });
  }

  @Mutation(() => CreateUserOutput, { name: 'addUser' })
  public async create(
    @Args('input', { type: () => CreateUserInput })
    input: CreateUserInput,
  ): Promise<CreateUserOutput> {
    const userExist = await this.userRepo.findOne({
      where: { $or: [{ username: input.username }, { email: input.username }] },
    });

    if (userExist)
      throw new BadRequestException(`This username or email is already taken`);

    const user = await this.userRepo.save(
      new User({
        ...input,
        password: await bcrypt.hash(input.password, await bcrypt.genSalt()),
      }),
    );

    return new CreateUserOutput({
      ...user,
      token: 'este es su token',
    });
  }

  @ResolveField(() => [Booking], { name: 'bookings', nullable: true })
  async getBookings(@Parent() user: User): Promise<Booking[]> {
    return await this.bookingService.getBookingByUserId(user.id);
  }
}
