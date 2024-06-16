import { PartialType } from '@nestjs/swagger';
import { CreateAccommodationInput } from './create-accommodation.input';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateAccommodationInput extends PartialType(
  CreateAccommodationInput,
) {}
