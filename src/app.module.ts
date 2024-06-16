import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BookingModule } from './booking/booking.module';
import { AccommodationModule } from './accommodation/accommodation.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { UserModule } from './auth/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    DatabaseModule,
    BookingModule,
    AccommodationModule,
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
