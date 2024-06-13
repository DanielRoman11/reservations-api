/* eslint-disable */
export default async () => {
  const t = {
    ['./booking/entities/booking.entity']: await import(
      './booking/models/booking.model'
    ),
    ['./accommodation/entities/accommodation.entity']: await import(
      './accommodation/models/accommodation.model'
    ),
    ['./booking/input/create-booking.dto']: await import(
      './booking/input/create-booking.dto'
    ),
    ['./booking/input/update-booking.dto']: await import(
      './booking/input/update-booking.dto'
    ),
  };
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./booking/input/create-booking.dto'),
          {
            CreateBookingDto: {
              checkInDate: { required: true, type: () => String },
              checkOutDate: { required: true, type: () => String },
              totalPrice: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./booking/input/update-booking.dto'),
          { UpdateBookingDto: {} },
        ],
        [
          import('./accommodation/models/accommodation.model'),
          {
            Accommodation: {
              id: { required: true, type: () => String },
              title: { required: true, type: () => String },
              rooms: { required: true, type: () => Number },
              beds: { required: true, type: () => Number },
              bathrooms: { required: true, type: () => Number },
              price: { required: true, type: () => Number },
              wifi: { required: true, type: () => Boolean },
              pets: { required: true, type: () => Boolean },
              guests: { required: true, type: () => Number },
              lat: { required: true, type: () => String },
              lng: { required: true, type: () => String },
              booking: {
                required: true,
                type: () => t['./booking/entities/booking.entity'].Booking,
              },
              owner: { required: true, type: () => Object },
            },
          },
        ],
        [
          import('./booking/models/booking.model'),
          {
            Booking: {
              id: { required: true, type: () => String },
              arrivalDate: { required: true, type: () => Date },
              departureDate: { required: true, type: () => Date },
              totalPrice: { required: true, type: () => Number },
              user: { required: true, type: () => Object },
              accommodation: {
                required: true,
                type: () =>
                  t['./accommodation/entities/accommodation.entity']
                    .Accommodation,
              },
            },
          },
        ],
        [
          import('./accommodation/input/create-accommodation.dto'),
          {
            CreateAccommodationDto: {
              title: { required: true, type: () => String },
              rooms: { required: true, type: () => Number },
              beds: { required: true, type: () => Number },
              bathrooms: { required: true, type: () => Number },
              price: { required: true, type: () => Number },
              guests: { required: true, type: () => Number },
              pets: { required: true, type: () => Boolean },
              wifi: { required: true, type: () => Boolean },
              arrivalDate: { required: true, type: () => String },
              departureDate: { required: true, type: () => String },
              lat: { required: true, type: () => String },
              lng: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./accommodation/input/update-accommodation.dto'),
          { UpdateAccommodationDto: {} },
        ],
        [
          import('./user/input/create-user.input'),
          {
            CreateUserDto: {
              username: { required: true, type: () => String },
              email: { required: true, type: () => String },
              password: { required: true, type: () => String },
            },
          },
        ],
        [import('./user/input/update-user.dto'), { UpdateUserDto: {} }],
      ],
      controllers: [
        [import('./app.controller'), { AppController: { index: {} } }],
        [
          import('./booking/booking.controller'),
          {
            BookingController: {
              create: {
                type: t['./booking/input/create-booking.dto'].CreateBookingDto,
              },
              findAll: { type: String },
              findOne: { type: String },
              update: {
                type: t['./booking/input/update-booking.dto'].UpdateBookingDto,
              },
              remove: { type: String },
            },
          },
        ],
        [
          import('./accommodation/accommodation.controller'),
          {
            AccommodationController: {
              create: {
                type: t['./accommodation/entities/accommodation.entity']
                  .Accommodation,
              },
              findAll: {
                type: [
                  t['./accommodation/entities/accommodation.entity']
                    .Accommodation,
                ],
              },
              findOne: { type: Object },
              update: { type: String },
              remove: { type: String },
            },
          },
        ],
      ],
    },
  };
};
