import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { USER, MONGO } from 'src/constants';

export const userProviders = [
  {
    provide: USER,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [MONGO],
  },
];
