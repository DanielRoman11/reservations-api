import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { AccommodationService } from './accommodation.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateAccommodationDto } from './dto/create-accommodation.dto';
import { UpdateAccommodationDto } from './dto/update-accommodation.dto';

@ApiTags('Accommodation')
@Controller('accommodation')
export class AccommodationController {
  constructor(private readonly accomService: AccommodationService) {}

  @Post()
  create(@Body() input: CreateAccommodationDto) {
    return this.accomService.create(input);
  }

  @Get()
  findAll() {
    return this.accomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateAccommodationDto) {
    return id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accomService.remove(+id);
  }
}
