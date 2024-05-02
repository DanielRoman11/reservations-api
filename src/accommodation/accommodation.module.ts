import { Module } from '@nestjs/common';
import { AccommodationService } from './accommodation.service';
import { AccommodationController } from './accommodation.controller';
import { accommodationProviders } from './accomodation.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...accommodationProviders, AccommodationService],
  controllers: [AccommodationController],
})
export class AccommodationModule {}
