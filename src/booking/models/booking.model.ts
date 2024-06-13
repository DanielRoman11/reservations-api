import { User } from '../../user/models/user.model';
import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Booking {
  @Field(() => ID)
  @ObjectIdColumn()
  id: string;

  @Field(() => Date)
  @Column()
  arrivalDate: Date;

  @Field(() => Date)
  @Column()
  departureDate: Date;

  @Field()
  @Column()
  totalPrice: number;

  @Field(() => User)
  @Column()
  userId: ObjectId;
}
