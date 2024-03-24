import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases/databases.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabasesModule,
    UsersModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
