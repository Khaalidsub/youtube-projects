import { Controller, Get } from '@nestjs/common';

@Controller('basic')
export class BasicController {
  constructor() {}

  @Get()
  getHello(): {
    port: number;
    databaseUrl: string;
  } {
    return null;
  }
}
