import { BadRequestException } from '@nestjs/common';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserService } from '../user.service';

@ValidatorConstraint({ async: true })
export class IsUserAlreadyTakenConstraint
  implements ValidatorConstraintInterface
{
  constructor(private readonly userService: UserService) {}
  async validate(value: any, validationArguments?: ValidationArguments) {
    const user = await this.userService.findUser(value);

    return !user;
  }

  defaultMessage?(args?: ValidationArguments): string {
    throw new BadRequestException(
      `User with ${args.property} '${args.value}' already exists. Choose another`,
    );
  }
}

export function IsUserAlreadyTaken(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserAlreadyTakenConstraint,
    });
  };
}
