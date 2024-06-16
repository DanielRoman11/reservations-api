import { Inject, Injectable } from '@nestjs/common';
import { ACCOMODATION } from 'src/constants';
import { MongoRepository } from 'typeorm';
import { Accommodation } from './models/accommodation.model';
import { CreateAccommodationInput } from './input/create-accommodation.input';

@Injectable()
export class AccommodationService {
  constructor(
    @Inject(ACCOMODATION)
    private readonly accommRepo: MongoRepository<Accommodation>,
  ) {}

  public async createAccomm(
    input: CreateAccommodationInput,
  ): Promise<Accommodation> {
    return await this.accommRepo.save(new Accommodation(input));
  }
}
