import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from '../auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/test'),
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}
