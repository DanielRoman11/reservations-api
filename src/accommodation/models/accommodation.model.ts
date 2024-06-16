import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, Column, Relation } from 'typeorm';

@ObjectType()
@Entity()
export class Accommodation {
  constructor(partial: Partial<Accommodation>) {
    Object.assign(this, partial);
  }

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
}
