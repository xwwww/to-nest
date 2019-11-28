import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service'
import { User } from './users.interface'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // 查询所有用户
  @Get()
  async findAll(): Promise<User[]> {
   return this.usersService.findAll()
  }
}
