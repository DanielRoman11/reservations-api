import { Inject, Injectable } from '@nestjs/common';
import { BOOKING } from 'src/constants';
import { Repository } from 'typeorm';
import { Booking } from './models/booking.model';
import { User } from 'src/user/models/user.model';

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

  public async getBookingByUserId(id: number) {
    return await this.bookingRepo.find({ where: { userId: id } });
  }
}
