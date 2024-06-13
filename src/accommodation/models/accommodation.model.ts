import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, Column, Relation } from 'typeorm';
import { Booking } from '../../booking/models/booking.model';
import { User } from '../../user/models/user.model';

@ObjectType()
@Entity()
export class Accommodation {
  @Field(() => ID)
  @ObjectIdColumn()
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  rooms: number;

  @Field()
  @Column()
  beds: number;

  @Field()
  @Column()
  bathrooms: number;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  wifi: boolean;

  @Field()
  @Column()
  pets: boolean;

  @Field()
  @Column()
  guests: number;

  @Field()
  @Column()
  lat: string;

  @Field()
  @Column()
  lng: string;

  @Field(() => Promise<[Booking]>, { nullable: true })
  bookings: Promise<Relation<Booking[]>>;

  @Field(() => Promise<User>)
  owner: Promise<Relation<User>>;
}
