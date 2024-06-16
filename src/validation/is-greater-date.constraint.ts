import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsGreaterDate(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isGreaterDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];

          const dateValue = new Date(value);
          const relatedDateValue = new Date(relatedValue);

          if (isNaN(dateValue.getTime()) || isNaN(relatedDateValue.getTime())) {
            return false;
          }

          return dateValue > relatedDateValue;
        },
        defaultMessage(args: ValidationArguments): string {
          const [relatedPropertyName] = args.constraints;
          return `Date ${args.property} must be greater than ${relatedPropertyName}`;
        },
      },
    });
  };
}
