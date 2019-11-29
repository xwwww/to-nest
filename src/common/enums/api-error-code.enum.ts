export enum ApiErrorCode {
  TIMEOUT = -1, // 系统繁忙
  SUCCESS = 0, // 成功

  USER_ID_INVALID = 10001, // 用户 ID 无效
  USER_NAME_INVALID = 10002, // 用户名无效
  USER_PWD_INVALID = 10003 // 用户密码无效
}