import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
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
    console.log(res)
    return res
  }

  async findById(_id): Promise<User> {
    const res = await this.userModel.findById(_id).exec()
    console.log(_id, res)
    return res
  }
}