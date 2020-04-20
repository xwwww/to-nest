import { User } from '../users.interface';
import { IsInt, IsString, Min, IsNotEmpty } from 'class-validator'
import { ApiErrorCode } from '../../common/enums/api-error-code.enum'

export class CreateUserDto implements User {

  @IsInt({ message: '用户 ID 必须是整数', context: { errorCode: ApiErrorCode.USER_ID_INVALID }})
  @Min(1, { message: '用户 ID 必须大于等于 1', context: {} })
  userId: number;

  @IsString({ message: '用户姓名必填', context: { errorCode: ApiErrorCode.USER_NAME_INVALID }})
  @IsNotEmpty({ message: '用户姓名必填', context: { errorCode: ApiErrorCode.USER_NAME_INVALID }})
  username: string;

  @IsString({ message: '密码必填', context: { errorCode: ApiErrorCode.USER_PWD_INVALID }})
  @IsNotEmpty({ message: '密码必填', context: { errorCode: ApiErrorCode.USER_PWD_INVALID }})
  password: string;
}