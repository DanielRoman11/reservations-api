import { Accommodation } from 'src/accommodation/models/accommodation.model';
import { Booking } from '../../booking/models/booking.model';
import { Column, Entity, ObjectIdColumn, Relation } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BookingService } from 'src/booking/booking.service';

@ObjectType()
@Entity()
export class User {
  constructor(private readonly bookingService: BookingService) {}
  @Field(() => Int)
  @ObjectIdColumn()
  id: number;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  password: string;

  @Field(() => [Booking])
  async bookings() {
    return await this.bookingService.getBookingByUserId(this.id);
  }
}
