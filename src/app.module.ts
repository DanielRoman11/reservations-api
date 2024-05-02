import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BookingModule } from './booking/booking.module';
import { AccommodationModule } from './accommodation/accommodation.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.${process.env.NODE_ENV}', '.env'],
    }),
    DatabaseModule,
    BookingModule,
    AccommodationModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
