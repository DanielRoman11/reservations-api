import { Inject, Injectable, Logger } from '@nestjs/common';
import { Accommodation } from './entities/accommodation.entity';
import { Repository } from 'typeorm';
import { ACCOMODATION } from '../constants';
import { CreateAccommodationDto } from './dto/create-accommodation.dto';

@Injectable()
export class AccommodationService {
  private readonly accomLogger = new Logger(AccommodationService.name);
  constructor(
    @Inject(ACCOMODATION)
    private accommRepo: Repository<Accommodation>,
  ) {}

  async create(accom: CreateAccommodationDto) {
    console.log(accom);
    const newAccom = this.accommRepo.create({
      ...accom,
      arrivalDate: new Date(accom.arrivalDate),
      departureDate: new Date(accom.departureDate),
    });

    this.accomLogger.debug('New Accommodation created');

    return await this.accommRepo.save(newAccom);
  }

  async findAll() {
    this.accomLogger.debug('Hit All endpoint');
    return await this.accommRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} accommodation`;
  }

  update() {
    return;
  }

  remove(id: number) {
    return `This action removes a #${id} accommodation`;
  }
}
