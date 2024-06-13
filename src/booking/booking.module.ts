import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { DatabaseModule } from '../database/database.module';
import { bookingProviders } from './booking.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...bookingProviders, BookingService],
})
export class BookingModule {}
