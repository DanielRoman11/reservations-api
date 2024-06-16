import { DataSource } from 'typeorm';
import { User } from './models/user.model';
import { USER, MONGO } from '../constants';

export const userProviders = [
  {
    provide: USER,
    useFactory: (dataSource: DataSource) => dataSource.getMongoRepository(User),
    inject: [MONGO],
  },
];
