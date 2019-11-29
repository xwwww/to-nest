import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service'
import { User } from './users.interface'
import { CreateUserDto } from './dtos/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // 查询所有用户
  @Get()
  async findAll(): Promise<User[]> {
   return this.usersService.findAll()
  }

  // 创建用户
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto)
  }

  // 根据 id 查询
  @Get(':_id')
  async findById(@Param() params): Promise<User> {
    console.log(params._id)
    return this.usersService.findById(params._id)
  }
}
