/*
 * @Author: your name
 * @Date: 2020-07-08 15:25:34
 * @LastEditTime: 2020-07-12 22:26:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /to-nest/src/auth/user.repository.ts
 */ 
import { Repository, EntityRepository } from "typeorm"
import { User } from "./user.entity"
import { AuthCredentialsDto } from "./dto/auth-credentials.dto"


@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;

    const user = new User();
    user.username = username;
    user.password = password;

    await user.save();
  }
}