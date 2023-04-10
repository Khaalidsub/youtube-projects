import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('const-config')
export class ConstConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(): {
    port: number;

    databaseUrl: string;
  } {
    return null;
  }
}
