import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = []

  create(user: User) {
    this.users.push(user)
  }

  findAll(): User[] {
    return this.users
  }
}