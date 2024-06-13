import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../database/database.module';
import { UserResolver } from './user.resolver';
import { BookingModule } from '../booking/booking.module';

@Module({
  imports: [DatabaseModule, BookingModule],
  providers: [...userProviders, UserService, UserResolver],
})
export class UserModule {}
