import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UsersController } from './users.controller';
import { UsersService } from './users.service'

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})

export class UsersModule {}
