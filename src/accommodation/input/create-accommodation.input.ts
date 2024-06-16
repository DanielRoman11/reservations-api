import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsPositive } from 'class-validator';

@InputType()
export class CreateAccommodationInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsPositive()
  rooms: number;

  @Field()
  @IsPositive()
  beds: number;

  @Field()
  @IsPositive()
  bathrooms: number;

  @Field()
  @IsPositive()
  price: number;

  @Field()
  @IsBoolean()
  wifi: boolean;

  @Field()
  @IsBoolean()
  pets: boolean;

  @Field()
  @IsPositive()
  maxguests: number;

  @Field()
  @IsNotEmpty()
  lat: string;

  @Field()
  @IsNotEmpty()
  lng: string;
}
