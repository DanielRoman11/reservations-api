import { Booking } from '../../booking/models/booking.model';
import { Column, Entity, Index, ObjectId, ObjectIdColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BookingService } from '../../booking/booking.service';

@ObjectType()
@Entity()
@Index('idx_user_email', ['email'], { unique: true })
@Index('idx_user_username', ['username'], { unique: true })
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  username: string;

  @Column()
  password: string;
}
