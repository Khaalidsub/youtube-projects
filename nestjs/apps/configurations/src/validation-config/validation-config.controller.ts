import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('validation-config')
export class ValidationConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello() {
    return;
  }
}
