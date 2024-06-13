import { Booking } from '../../booking/models/booking.model';
import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BookingService } from '../../booking/booking.service';

@ObjectType()
@Entity()
export class User {
  constructor(private readonly bookingService: BookingService) {}
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  password: string;

  @Field(() => [Booking], { nullable: true })
  async bookings(): Promise<Booking[] | null> {
    return await this.bookingService.getBookingByUserId(this.id);
  }
}
