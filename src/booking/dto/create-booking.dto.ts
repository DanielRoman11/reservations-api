import { IsDateString, IsNumberString, IsNotEmpty } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsDateString()
  checkInDate: string;

  @IsNotEmpty()
  @IsDateString()
  checkOutDate: string;

  @IsNotEmpty()
  @IsNumberString()
  totalPrice: string;
}
