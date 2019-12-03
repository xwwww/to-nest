import { HttpException, HttpStatus } from '@nestjs/common'
import { ApiErrorCode } from '../enums/api-error-code.enum'

export class ApiException extends HttpException {

  private errorMessge: string;
  private errorCode: ApiErrorCode;

  constructor(errorMessge: string, errorCode: ApiErrorCode, statusCode: HttpStatus) {
    super(errorMessge, statusCode)

    this.errorMessge = errorMessge
    this.errorCode = errorCode
  }

  getErrorCode(): ApiErrorCode {
    return this.errorCode
  }

  getErrorMessage(): string {
    return this.errorMessge
  }
}