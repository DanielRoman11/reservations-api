import { Inject, Injectable } from '@nestjs/common';
import { BOOKING } from '../constants';
import { ObjectId, Repository } from 'typeorm';
import { Booking } from './models/booking.model';

@Injectable()
export class BookingService {
  constructor(
    @Inject(BOOKING)
    private readonly bookingRepo: Repository<Booking>,
  ) {}

  public async AllBookings() {
    return await this.bookingRepo.find();
  }

  public async getBookingById(id: Pick<Booking, 'id'>) {
    return await this.bookingRepo.findOneByOrFail(id);
  }

  public async getBookingByUserId(id: ObjectId) {
    const bookings = await this.bookingRepo.find({ where: { userId: id } });
    return bookings;
  }
}
