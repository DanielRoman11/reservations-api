import { Module } from '@nestjs/common';
import { AccommodationService } from './accommodation.service';
import { accommodationProviders } from './accomodation.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...accommodationProviders, AccommodationService],
})
export class AccommodationModule {}
