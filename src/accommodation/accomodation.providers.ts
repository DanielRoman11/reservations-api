import { DataSource } from 'typeorm';
import { Accommodation } from './entities/accommodation.entity';
import { ACCOMODATION, MONGO } from '../constants';

export const accommodationProviders = [
  {
    provide: ACCOMODATION,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Accommodation),
    inject: [MONGO],
  },
];
