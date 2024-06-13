import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsPositive,
  Length,
} from 'class-validator';

export class CreateAccommodationDto {
  @Length(10, 60)
  title: string;

  @IsPositive()
  rooms: number;

  @IsPositive()
  beds: number;

  @IsPositive()
  bathrooms: number;

  @IsPositive()
  price: number;

  @IsPositive()
  guests: number;

  @IsBoolean()
  pets: boolean;

  @IsBoolean()
  wifi: boolean;

  @IsDateString()
  arrivalDate: string;

  @IsDateString()
  departureDate: string;

  @IsNotEmpty()
  lat: string;

  @IsNotEmpty()
  lng: string;
}
