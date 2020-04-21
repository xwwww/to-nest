import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { TasksModule } from './tasks/tasks.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmConfig } from 'src/config/typeorm.config';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    MongooseModule.forRoot('mongodb://localhost/test'),
    AuthModule,
    TasksModule
  ],
  controllers: [AppController]
})
export class AppModule {}
