import { MONGO } from 'src/constants';
import { DataSource } from 'typeorm';

console.log(process.env.MONGO_URL);

export const databaseProviders = [
  {
    provide: MONGO,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        url: process.env.MONGO_URL,
        database: process.env.DB_NAME,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: process.env.NODE_ENV === 'dev',
      });

      return dataSource.initialize();
    },
  },
];
