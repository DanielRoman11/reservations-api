import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AccommodationService } from './accommodation.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateAccommodationDto } from './input/create-accommodation.dto';
import { UpdateAccommodationDto } from './input/update-accommodation.dto';
import { User } from 'src/user/entities/user.entity';
import { Accommodation } from './entities/accommodation.entity';

@ApiTags('Accommodation')
@Controller('accommodation')
export class AccommodationController {
  constructor(private readonly accomService: AccommodationService) {}

  @Post()
  create(
    @Body() input: CreateAccommodationDto,
    @Param('id') id: Pick<User, 'id'>,
  ) {
    return this.accomService.create(input, id);
  }

  @Get()
  findAll() {
    return this.accomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: Pick<Accommodation, 'id'>) {
    return this.accomService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateAccommodationDto) {
    return id;
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: Pick<Accommodation, 'id'>) {
    return this.accomService.remove(+id);
  }
}
