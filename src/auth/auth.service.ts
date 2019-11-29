import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(id: number, pass: string): Promise<any> {
    const user = await this.usersService.findById(id)
    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }

    return null
  }
}
