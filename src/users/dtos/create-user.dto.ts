import { User } from '../users.interface';
import { IsInt, IsString, Min, IsNotEmpty } from 'class-validator'

export class CreateUserDto implements User {

  @IsInt({ message: '用户 ID 必须是整数', context: { errorCode: 0 }})
  @Min(1, { message: '用户 ID 必须大于等于 1', context: {} })
  userId: number;

  @IsString({ message: '用户姓名必填', context: { errorCode: 0 }})
  @IsNotEmpty({ message: '用户姓名必填', context: { errorCode: 0 }})
  username: string;

  @IsString({ message: '密码必填', context: { errorCode: 0 }})
  @IsNotEmpty({ message: '密码必填', context: { errorCode: 0 }})
  password: string;
}