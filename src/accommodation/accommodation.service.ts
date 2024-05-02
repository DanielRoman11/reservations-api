import { Inject, Injectable, Logger } from '@nestjs/common';
import { Accommodation } from './entities/accommodation.entity';
import { Repository } from 'typeorm';
import { ACCOMODATION } from '../constants';

@Injectable()
export class AccommodationService {
  private readonly accomLogger = new Logger(AccommodationService.name);
  constructor(
    @Inject(ACCOMODATION)
    private accommRepo: Repository<Accommodation>,
  ) {}

  create() {
    return 'This action adds a new accommodation';
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
