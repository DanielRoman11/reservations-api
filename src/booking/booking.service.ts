import { Inject, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { BOOKING } from '../constants';

@Injectable()
export class BookingService {
  constructor(
    @Inject(BOOKING)
    private readonly bookingRepo: Repository<Booking>,
  ) {}

  create(createBookingDto: CreateBookingDto) {
    return createBookingDto;
  }

  findAll() {
    return `This action returns all booking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return updateBookingDto;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
