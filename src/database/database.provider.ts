import { MONGO } from '../constants';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: MONGO,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        url: process.env.MONGO_URL,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: process.env.NODE_ENV === 'development',
      });

      await dataSource.initialize();
      return dataSource;
    },
  },
];
