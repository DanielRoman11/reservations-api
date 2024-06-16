/* eslint-disable */
export default async () => {
  const t = {};
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
          import('./accommodation/input/create-accommodation.input'),
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
        [import('./user/input/update-user.dto'), { UpdateUserDto: {} }],
        [import('./auth/input/update-user.dto'), { UpdateUserDto: {} }],
      ],
      controllers: [
        [import('./app.controller'), { AppController: { index: {} } }],
      ],
    },
  };
};
