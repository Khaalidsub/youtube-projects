import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class WebsocketseventsController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
