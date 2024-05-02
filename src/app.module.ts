import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BookingModule } from './booking/booking.module';
import { AccommodationModule } from './accommodation/accommodation.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.${process.env.NODE_ENV}', '.env'],
    }),
    DatabaseModule,
    BookingModule,
    AccommodationModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
