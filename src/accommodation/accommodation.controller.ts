import { Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { AccommodationService } from './accommodation.service';

@Controller('accommodation')
export class AccommodationController {
  constructor(private readonly accommodationService: AccommodationService) {}

  @Post()
  create() {
    return;
  }

  @Get()
  findAll() {
    return this.accommodationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accommodationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accommodationService.remove(+id);
  }
}
