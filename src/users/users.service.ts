import { Model } from 'mongoose';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.interface';
import { CreateUserDto } from './dtos/create-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto)
    return await createUser.save()
  }

  async findAll(): Promise<User[]> {
    const res = await this.userModel.find().exec()
    return res
  }

  async findById(_id): Promise<User> {
    const res = await this.userModel.findById(_id).exec()
    return res
  }

  async findOne(username: string): Promise<User | undefined> {
    const res = await this.userModel.find().exec()
    const user = res.find(user => user.username === username)
    return user
  }

  async delete(_id): Promise<User> {
    return await this.userModel.deleteOne({ _id: _id })
  }
}