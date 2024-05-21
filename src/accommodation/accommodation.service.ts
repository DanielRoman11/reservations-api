import { Inject, Injectable, Logger } from '@nestjs/common';
import { Accommodation } from './entities/accommodation.entity';
import { InsertQueryBuilder, Repository } from 'typeorm';
import { ACCOMODATION, USER } from '../constants';
import { CreateAccommodationDto } from './dto/create-accommodation.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AccommodationService {
  private readonly accomLogger = new Logger(AccommodationService.name);
  constructor(
    @Inject(ACCOMODATION)
    private accommRepo: Repository<Accommodation>,
    @Inject(USER)
    private userRepo: Repository<User>,
  ) {}

  async create(accom: CreateAccommodationDto): Promise<Accommodation> {
    const newAccomm = this.accommRepo.create(accom);
    const user = await this.userRepo.findOneBy({ id: 1 });
    newAccomm.owner = user;
    return await this.accommRepo.save(newAccomm);
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
