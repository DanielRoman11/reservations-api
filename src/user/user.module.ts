import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../database/database.module';
import { UserResolver } from './user.resolver';
import { BookingModule } from '../booking/booking.module';
import { IsUserAlreadyTakenConstraint } from './validation/is-user-taken.constraint';

@Module({
  imports: [DatabaseModule, BookingModule],
  providers: [
    ...userProviders,
    UserService,
    UserResolver,
    IsUserAlreadyTakenConstraint,
  ],
  exports: [UserService],
})
export class UserModule {}
