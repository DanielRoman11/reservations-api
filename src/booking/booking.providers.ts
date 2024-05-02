import { DataSource } from 'typeorm';
import { BOOKING, MONGO } from '../constants';
import { Booking } from './entities/booking.entity';

export const bookingProviders = [
  {
    provide: BOOKING,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Booking),
    inject: [MONGO],
  },
];
