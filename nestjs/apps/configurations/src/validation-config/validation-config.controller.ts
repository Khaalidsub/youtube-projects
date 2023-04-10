import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config/config';

@Controller('validation-config')
export class ValidationConfigController {
  constructor(private readonly configService: ConfigService<Config, true>) {}

  @Get()
  getHello(): {
    port: number;

    databaseUrl: string;
  } {
    const port = this.configService.get('PORT');
    const databaseUrl = this.configService.get('DATABASE_URL');
    return {
      port,
      databaseUrl,
    };
  }
}
