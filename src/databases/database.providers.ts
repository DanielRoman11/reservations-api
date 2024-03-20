import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        useNewUrlParser: true,
        logging: true,
        url: process.env.MONGO_URL,
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASS,
        database: 'reservas',
        synchronize: process.env.NODE_ENV === 'dev',
      });

      return dataSource
        .initialize()
        .then(() => {
          console.log('MongoDb Data Source has been initialized!');
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
];
