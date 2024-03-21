import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URL || 'mongodb://localhost:27017/reservas',
      logging: true,
      synchronize: process.env.NODE_ENV === 'dev',
      entities: [__dirname + "**/*.ts"]
    }),
  ],
})
export class DatabasesModule {}
