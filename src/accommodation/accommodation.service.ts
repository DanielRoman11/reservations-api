import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Accommodation } from './entities/accommodation.entity';
import { Repository } from 'typeorm';
import { ACCOMODATION, USER } from '../constants';
import { CreateAccommodationDto } from './input/create-accommodation.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { UpdateAccommodationDto } from './input/update-accommodation.dto';

@Injectable()
export class AccommodationService {
  private readonly logger = new Logger(AccommodationService.name);
  constructor(
    @Inject(ACCOMODATION)
    private accommRepo: Repository<Accommodation>,
    private userService: UserService,
  ) {}

  public async create(
    accom: CreateAccommodationDto,
    id: Pick<User, 'id'>,
  ): Promise<Accommodation> {
    return;
  }

  public async findAll() {
    return await this.accommRepo.find();
  }

  public async findOne(id: Pick<Accommodation, 'id'>) {
    const user = await this.accommRepo.findOneBy(id);
    return user ?? new NotFoundException(`User not Found`);
  }

  public async update(input: UpdateAccommodationDto, id: Pick<User, 'id'>) {
    return;
  }

  public async remove(id: number) {
    return `This action removes a #${id} accommodation`;
  }
}
