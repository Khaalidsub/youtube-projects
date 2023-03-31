import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('basic')
export class BasicController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(): {
    port: number;
    databaseUrl: string;
  } {
    return {
      databaseUrl: this.configService.get('DATABASE_URL'),
      port: this.configService.get('PORT'),
    };
  }
}
