import { DataSource } from 'typeorm';
import { Accommodation } from './models/accommodation.model';
import { ACCOMODATION, MONGO } from '../constants';

export const accommodationProviders = [
  {
    provide: ACCOMODATION,
    useFactory: (dataSource: DataSource) =>
      dataSource.getMongoRepository(Accommodation),
    inject: [MONGO],
  },
];
