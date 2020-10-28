/*
 * @Author: your name
 * @Date: 2020-07-08 15:25:34
 * @LastEditTime: 2020-10-28 22:31:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /to-nest/src/auth/user.repository.ts
 */ 
import { Repository, EntityRepository } from "typeorm"
import { User } from "./user.entity"
import { AuthCredentialsDto } from "./dto/auth-credentials.dto"
import { ConflictException, InternalServerErrorException } from "@nestjs/common";


@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;
    console.log(username, password)

    const exists = this.findOne({ username })
    if (exists) {
      // throw some error
    }
    const user = new User();
    user.username = username;
    user.password = password;

    console.log(user)
    try {
      await user.save();
    } catch (error) {
      console.error(error.code)
      if (error.code === 11000) {
        throw new ConflictException('Username already exists')
      } else {
        throw new InternalServerErrorException()
      }
    }
  }
}