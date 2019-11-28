import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // getVersion 方法
  @Get('/version')
  getVersion(): Object {
    return this.appService.getVersion()
  }
}
