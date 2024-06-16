import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsPositive } from 'class-validator';
import { IsGreaterDate } from 'src/validation/is-greater-date.constraint';

@InputType()
export class CreateBookingInput {
  @Field()
  @IsDateString()
  checkInDate: string;

  @Field()
  @IsDateString()
  @IsGreaterDate('checkInDate')
  checkOutDate: string;

  @Field()
  @IsPositive()
  totalPrice: string;
}
