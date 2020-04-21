import { Controller, Get, Post, Body, Param, Delete, HttpStatus } from '@nestjs/common';
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
  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    const users = await this.findAll()
    if (users.find(user => user.username === createUserDto.username)) {
      throw new Error('用户名已存在')
    }
    this.usersService.create(createUserDto)
  }

  // 根据 id 查询
  @Get(':_id')
  async findById(@Param() params): Promise<User> {
    return this.usersService.findById(params._id)
  }

  // 删除
  @Delete(':_id')
  async deleteById(@Param() params): Promise<User> {
    return this.usersService.delete(params._id)
  }
}
