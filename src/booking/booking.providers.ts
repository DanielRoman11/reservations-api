import { DataSource } from 'typeorm';
import { BOOKING, MONGO } from '../constants';
import { Booking } from './models/booking.model';

export const bookingProviders = [
  {
    provide: BOOKING,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Booking),
    inject: [MONGO],
  },
];
